import { GatewayKhasConditions } from './../../../model/Gateway/gatewayKhasConditions.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { isBoolean } from 'util';
import { GatewayLogs } from 'src/model/Gateway/gatewaylogs.entity';

export class GatewayLogsDTO
  implements Readonly<GatewayLogsDTO>
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
  GatewayID: string;
  @ApiProperty()
  @IsString()
  LogContent: string;
  @ApiProperty()
  @IsString()
  LogTitle: string;
  @ApiProperty()
  @IsString()
  LogDescription: string;
  @ApiProperty()
  @IsString()
  LogStatus: string;
 

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<GatewayLogsDTO>) {
    const it = new GatewayLogsDTO();
    it.contentId = dto.contentId;
    it.GatewayID = dto.GatewayID;
    it.LogContent = dto.LogContent;
    it.LogTitle = dto.LogTitle;
    it.LogDescription = dto.LogDescription;
    it.LogStatus = dto.LogStatus;
    

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: GatewayLogs) {
    return this.from({
      contentId: entity.ContentID,
      GatewayID: entity.GatewayID,
      LogContent: entity.LogContent,
      LogTitle: entity.LogTitle,
      LogDescription: entity.LogDescription,
      LogStatus: entity.LogStatus,
      
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<GatewayLogsDTO>) {
    const givenData = new GatewayLogs();
    givenData.GatewayID = dto.GatewayID;
    givenData.LogContent = dto.LogContent;
    givenData.LogTitle = dto.LogTitle;
    givenData.LogDescription = dto.LogDescription;
    givenData.LogStatus = dto.LogStatus;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
