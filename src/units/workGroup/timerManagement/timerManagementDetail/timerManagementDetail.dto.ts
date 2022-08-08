import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { isBoolean } from 'util';
import { GatewayLogs } from 'src/model/Gateway/gatewaylogs.entity';
import { ManuelValveStrategies } from 'src/model/WorkGroup/Sensors/manuelValveStrategies.entity';
import { TimerManagement } from 'src/model/WorkGroup/TimerManagement/timerManagement.entity';
import { TimerManagementDetail } from 'src/model/WorkGroup/TimerManagement/timerManagementDetail.entity';

export class TimerManagementDetailDTO
  implements Readonly<TimerManagementDetailDTO>
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
  TimerManagementID: string;
  @ApiProperty()
  @IsString()
  SensorCardID: string;
  @ApiProperty()
  @IsString()
  Name: string;
  @ApiProperty()
  @IsString()
  Days: string[];
  @ApiProperty()
  @IsString()
  StartHour: string;
  @ApiProperty()
  @IsString()
  FinishHour: string;
  @ApiProperty()
  @IsString()
  TotalWorkTime: string;
  @ApiProperty()
  @IsBoolean()
  IsAuto: boolean;
  
  
  
  
  
 
 

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<TimerManagementDetailDTO>) {
    const it = new TimerManagementDetailDTO();
    it.contentId = dto.contentId;
    it.TimerManagementID = dto.TimerManagementID;
    it.SensorCardID = dto.SensorCardID;
    it.Name = dto.Name;
    it.Days = dto.Days;
    it.StartHour = dto.StartHour;
    it.FinishHour = dto.FinishHour;
    it.TotalWorkTime = dto.TotalWorkTime;
    it.IsAuto = dto.IsAuto;
   
    

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: TimerManagementDetail) {
    return this.from({
      contentId: entity.ContentID,
      TimerManagementID: entity.TimerManagementID,
      SensorCardID: entity.SensorCardID,
      Name: entity.Name,
      Days: entity.Days,
      StartHour: entity.StartHour,
      FinishHour : entity.FinishHour,
      TotalWorkTime : entity.TotalWorkTime,
      IsAuto : entity.IsAuto,
      
      
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<TimerManagementDetailDTO>) {
    const givenData = new TimerManagementDetail();
    givenData.TimerManagementID = dto.TimerManagementID;
    givenData.SensorCardID = dto.SensorCardID;
    givenData.Name = dto.Name;
    givenData.Days =dto.Days;
    givenData.StartHour = dto.StartHour;
    givenData.FinishHour = dto.FinishHour;
    givenData.TotalWorkTime = dto.TotalWorkTime;
    givenData.IsAuto = dto.IsAuto;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
