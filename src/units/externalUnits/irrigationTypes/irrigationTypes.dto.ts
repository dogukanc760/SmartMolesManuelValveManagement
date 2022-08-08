import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { IrrigationTypes } from 'src/model/ExternalUnits/irrigationTypes.entity';


export class IrrigationTypesDTO implements Readonly<IrrigationTypesDTO> {
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

  public static from(dto: Partial<IrrigationTypesDTO>) {
    const it = new IrrigationTypesDTO();
    it.contentId = dto.contentId;
    it.TitleTR = dto.TitleTR;
    it.TitleEN = dto.TitleEN;
    it.ImageUrl = dto.ImageUrl;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: IrrigationTypes) {
    return this.from({
      contentId: entity.ContentID,
      TitleEN: entity.TitleEN,
      TitleTR: entity.TitleTR,
      ImageUrl: entity.ImageUrl,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<IrrigationTypesDTO>) {
    const givenData = new IrrigationTypes();
    givenData.ImageUrl = dto.ImageUrl;
    givenData.TitleEN = dto.TitleEN;
    givenData.TitleTR = dto.TitleTR;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
