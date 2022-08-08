import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { isBoolean } from 'util';

export class DevicesLocationDTO implements Readonly<DevicesLocationDTO> {
  @ApiProperty({ required: false })
  contentId: string;
  @ApiProperty({ required: false })
  createdAt: Date;
  @ApiProperty({ required: false })
  updatedAt: Date;
  @ApiProperty({ required: false })
  lastChangedDateTime: Date;
  @ApiProperty()
  @IsString()
  TitleTR: string;
  @ApiProperty()
  @IsString()
  TitleEN: string;
  @ApiProperty()
  @IsString()
  ImageUrl: string;
  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<DevicesLocationDTO>) {
    const it = new DevicesLocationDTO();
    it.contentId = dto.contentId;
    it.ImageUrl = dto.ImageUrl;
    it.TitleEN = dto.TitleEN;
    it.TitleTR = dto.TitleTR;
    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: DevicesLocation) {
    return this.from({
      contentId: entity.ContentID,
      ImageUrl: entity.ImageUrl,
      TitleEN: entity.TitleEN,
      TitleTR: entity.TitleTR,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<DevicesLocationDTO>) {
    const givenData = new DevicesLocation();
    givenData.TitleTR = dto.TitleTR;
    givenData.TitleEN = dto.TitleEN;
    givenData.ImageUrl = dto.ImageUrl;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
