import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { TimerManagementLogs } from 'src/model/WorkGroup/TimerManagement/timerManagementLogs.entity';

import { isBoolean } from 'util';

export class TimerManagementLogsDTO implements Readonly<TimerManagementLogsDTO> {
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

  public static from(dto: Partial<TimerManagementLogsDTO>) {
    const it = new TimerManagementLogsDTO();
    it.contentId = dto.contentId;
    it.TimerManagementID = dto.TimerManagementID;
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

  public static fromEntity(entity: TimerManagementLogs) {
    return this.from({
      contentId: entity.ContentID,
      TimerManagementID: entity.TimerManagementID,
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

  public static toEntity(dto: Partial<TimerManagementLogsDTO>) {
    const givenData = new TimerManagementLogs();
    givenData.TimerManagementID = dto.TimerManagementID;
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
