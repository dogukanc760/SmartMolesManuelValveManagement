import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { isBoolean } from 'util';
import { GatewayLogs } from 'src/model/Gateway/gatewaylogs.entity';
import { ManuelValveStrategies } from 'src/model/WorkGroup/Sensors/manuelValveStrategies.entity';
import { TimerManagement } from 'src/model/WorkGroup/TimerManagement/timerManagement.entity';

export class TimerManagementDTO
  implements Readonly<TimerManagementDTO>
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
  WorkGroupID: string;
  @ApiProperty()
  @IsString()
  TimerName: string;
 
 

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<TimerManagementDTO>) {
    const it = new TimerManagementDTO();
    it.contentId = dto.contentId;
    it.WorkGroupID = dto.WorkGroupID;
    it.TimerName = dto.TimerName;
   
    

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: TimerManagement) {
    return this.from({
      contentId: entity.ContentID,
      WorkGroupID: entity.WorkGroupID,
      TimerName: entity.TimerName,
      
      
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<TimerManagementDTO>) {
    const givenData = new TimerManagement();
    givenData.WorkGroupID = dto.WorkGroupID;
    givenData.TimerName = dto.TimerName;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
