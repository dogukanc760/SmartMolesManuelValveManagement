import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { isBoolean } from 'util';
import { GatewayLogs } from 'src/model/Gateway/gatewaylogs.entity';
import { ManuelValveStrategies } from 'src/model/WorkGroup/Sensors/manuelValveStrategies.entity';

export class ManuelValveStrategiesDTO
  implements Readonly<ManuelValveStrategiesDTO>
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
  SensorCardID: string;
  @ApiProperty()
  @IsString()
  StrategyType: string;
  @ApiProperty()
  @IsString()
  Params: string;
  @ApiProperty()
  @IsString()
  CloseValve: string;
  @ApiProperty()
  @IsString()
  Message: string;
 

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<ManuelValveStrategiesDTO>) {
    const it = new ManuelValveStrategiesDTO();
    it.contentId = dto.contentId;
    it.StrategyType = dto.StrategyType;
    it.Params = dto.Params;
    it.CloseValve = dto.CloseValve;
    it.Message = dto.Message;
    it.SensorCardID = dto.SensorCardID;
    

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: ManuelValveStrategies) {
    return this.from({
      contentId: entity.ContentID,
      SensorCardID: entity.SensorCardID,
      StrategyType: entity.StrategyType,
      Params: entity.Params,
      CloseValve: entity.CloseValve,
      Message: entity.Message,
      
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<ManuelValveStrategiesDTO>) {
    const givenData = new ManuelValveStrategies();
    givenData.SensorCardID = dto.SensorCardID;
    givenData.StrategyType = dto.StrategyType;
    givenData.Params = dto.Params;
    givenData.CloseValve = dto.CloseValve;
    givenData.Message = dto.Message;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
