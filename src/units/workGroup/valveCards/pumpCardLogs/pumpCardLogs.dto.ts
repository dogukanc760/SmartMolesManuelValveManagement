import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { PumpCardLogs } from 'src/model/WorkGroup/ValveCards/pumpCardLogs.entity';

import { isBoolean } from 'util';

export class PumpCardLogsDTO implements Readonly<PumpCardLogsDTO> {
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
  PumpCardID: string;
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

  public static from(dto: Partial<PumpCardLogsDTO>) {
    const it = new PumpCardLogsDTO();
    it.contentId = dto.contentId;
    it.PumpCardID = dto.PumpCardID;
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

  public static fromEntity(entity: PumpCardLogs) {
    return this.from({
      contentId: entity.ContentID,
      PumpCardID: entity.PumpCardID,
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

  public static toEntity(dto: Partial<PumpCardLogsDTO>) {
    const givenData = new PumpCardLogsDTO();
    givenData.PumpCardID = dto.PumpCardID;
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
