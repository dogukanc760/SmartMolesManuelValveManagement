import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { isBoolean } from 'util';

export class GatewayDTO implements Readonly<GatewayDTO> {
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
  SalesID: string;
  @ApiProperty()
  @IsString()
  UserID: string;
  @ApiProperty()
  @IsString()
  Name: string;
  @ApiProperty()
  @IsString()
  Lang: string;
  @ApiProperty()
  @IsString()
  Lat: string;
  @ApiProperty()
  @IsString()
  ServerIP: string;
  @ApiProperty()
  @IsString()
  ServerPort: string;
  @ApiProperty()
  @IsString()
  GatewayIP: string;
  @ApiProperty()
  @IsString()
  GatewayPort: string;
  @ApiProperty()
  @IsString()
  TelitClientPort: string;
  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<GatewayDTO>) {
    const it = new GatewayDTO();
    it.contentId = dto.contentId;
    it.SalesID = dto.SalesID;
    it.UserID = dto.UserID;
    it.Name = dto.Name;
    it.Lang = dto.Lang;
    it.Lat = dto.Lat;
    it.ServerIP = dto.ServerIP;
    it.ServerPort = dto.ServerPort;
    it.GatewayIP = dto.GatewayIP;
    it.GatewayPort = dto.GatewayPort;
    it.TelitClientPort = dto.TelitClientPort;
    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Gateway) {
    return this.from({
      contentId: entity.ContentID,
      SalesID: entity.SalesID,
      UserID: entity.UserID,
      Name: entity.Name,
      Lang: entity.Lang,
      Lat: entity.Lat,
      ServerIP: entity.ServerIP,
      ServerPort: entity.ServerPort,
      GatewayIP: entity.GatewayIP,
      TelitClientPort: entity.TelitClientPort,
      GatewayPort: entity.GatewayPort,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<GatewayDTO>) {
    const givenData = new Gateway();
    givenData.SalesID = dto.SalesID;
    givenData.UserID = dto.UserID;
    givenData.Name = dto.Name;
    givenData.Lang = dto.Lang;
    givenData.Lat = dto.Lat;
    givenData.ServerIP = dto.ServerIP;
    givenData.ServerPort = dto.ServerPort;
    givenData.GatewayIP = dto.GatewayIP;
    givenData.GatewayPort = dto.GatewayPort;
    givenData.TelitClientPort = dto.TelitClientPort;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
