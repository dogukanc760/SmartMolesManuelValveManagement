import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { isBoolean } from 'util';
import { GatewayLogs } from 'src/model/Gateway/gatewaylogs.entity';
import { ManuelValveStrategies } from 'src/model/WorkGroup/Sensors/manuelValveStrategies.entity';
import { PumpManagementTypes } from 'src/model/WorkGroup/Sensors/pumpManagementTypes.entity';

export class PumpManagementTypesDTO
  implements Readonly<PumpManagementTypesDTO>
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
  TitleTR: string;
  @ApiProperty()
  @IsString()
  TitleEN: string;
  
 

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<PumpManagementTypesDTO>) {
    const it = new PumpManagementTypesDTO();
    it.contentId = dto.contentId;
    it.TitleTR = dto.TitleTR;
    it.TitleEN = dto.TitleEN;
    

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: PumpManagementTypes) {
    return this.from({
      contentId: entity.ContentID,
      TitleEN : entity.TitleEN,
      TitleTR : entity.TitleTR,
      
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<PumpManagementTypesDTO>) {
    const givenData = new PumpManagementTypes();
    givenData.TitleTR = dto.TitleTR;
    givenData.TitleEN = dto.TitleEN;
  
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
