import { GatewayKhasConditions } from './../../../model/Gateway/gatewayKhasConditions.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { isBoolean } from 'util';
import { GatewayLogs } from 'src/model/Gateway/gatewaylogs.entity';
import { GatewayMoistureConditions } from 'src/model/Gateway/gatewayMoistureConditions.entity';

export class GatewayMoistureConditionsDTO
  implements Readonly<GatewayMoistureConditionsDTO>
{
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
  PackageLenght: number;
  @ApiProperty()
  @IsString()
  GatewayID: string;
  @ApiProperty()
  @IsString()
  EepromAddress: string;
  @ApiProperty()
  @IsString()
  Command: string;
  @ApiProperty()
  @IsString()
  ReadPeriod: string;
  @ApiProperty()
  @IsString()
  SendingType: string;
 

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<GatewayMoistureConditionsDTO>) {
    const it = new GatewayMoistureConditionsDTO();
    it.contentId = dto.contentId;
    it.GatewayID = dto.GatewayID;
    it.PackageLenght = dto.PackageLenght;
    it.EepromAddress = dto.EepromAddress;
    it.Command = dto.Command;
    it.ReadPeriod = dto.ReadPeriod;
    it.SendingType = dto.SendingType;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: GatewayMoistureConditions) {
    return this.from({
        contentId: entity.ContentID,
        GatewayID: entity.GatewayID,
        PackageLenght: entity.PackageLenght,
        EepromAddress: entity.EepromAddress,
        Command: entity.Command,
        ReadPeriod: entity.ReadPeriod,
        SendingType: entity.SendingType,
      
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
        lastChangedDateTime: entity.lastChangedDateTime,
        isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<GatewayMoistureConditionsDTO>) {
    const givenData = new GatewayMoistureConditionsDTO();
    givenData.GatewayID = dto.GatewayID;
    givenData.PackageLenght = dto.PackageLenght;
    givenData.EepromAddress = dto.EepromAddress;
    givenData.Command = dto.Command;
    givenData.ReadPeriod = dto.ReadPeriod;
    givenData.SendingType = dto.SendingType;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
