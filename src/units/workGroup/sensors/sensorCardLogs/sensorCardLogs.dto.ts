import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { SensorCalibrationLog } from 'src/model/WorkGroup/Sensors/sensorCalibrationLog.entity';
import { SensorCardLogs } from 'src/model/WorkGroup/Sensors/sensorCardLogs.entity';


export class SensorCardLogsDTO
  implements Readonly<SensorCardLogsDTO>
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

  public static from(dto: Partial<SensorCardLogsDTO>) {
    const it = new SensorCardLogsDTO();
    it.contentId = dto.contentId;

    it.SensorCardID = dto.SensorCardID;
    
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

  public static fromEntity(entity: SensorCardLogs) {
    return this.from({
      contentId: entity.ContentID,
      SensorCardID: entity.SensorCardID,
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

  public static toEntity(dto: Partial<SensorCardLogsDTO>) {
    const givenData = new SensorCardLogs();
    givenData.SensorCardID = dto.SensorCardID;
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
