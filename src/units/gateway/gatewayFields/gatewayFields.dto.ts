import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { GatewayFields } from 'src/model/Gateway/gatewayFields.entity';
import { isBoolean } from 'util';

export class GatewayFieldsDTO implements Readonly<GatewayFieldsDTO> {
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
  GatewayID: string;
  @ApiProperty()
  @IsString()
  Description: string;
  @ApiProperty()
  @IsString()
  Name: string;
  @ApiProperty()
  @IsString()
  Lang: string;
  @ApiProperty()
  @IsString()
  Lat: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<GatewayFieldsDTO>) {
    const it = new GatewayFieldsDTO();
    it.contentId = dto.contentId;
    it.GatewayID = dto.GatewayID;
    it.Description = dto.Description;
    it.Name = dto.Name;
    it.Lang = dto.Lang;
    it.Lat = dto.Lat;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: GatewayFields) {
    return this.from({
      contentId: entity.ContentID,
      GatewayID: entity.GatewayID,
      Description: entity.Description,
      Name: entity.Name,
      Lang: entity.Lang,
      Lat: entity.Lat,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<GatewayFieldsDTO>) {
    const givenData = new GatewayFields();
    givenData.GatewayID = dto.GatewayID;
    givenData.Description = dto.Description;
    givenData.Name = dto.Name;
    givenData.Lang = dto.Lang;
    givenData.Lat = dto.Lat;
    

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
