import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ValveCardLogs } from 'src/model/WorkGroup/ValveCards/valveCardLogs.entity';

import { isBoolean } from 'util';

export class ValveCardLogsDTO implements Readonly<ValveCardLogsDTO> {
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
  ValveCardID: string;
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

  public static from(dto: Partial<ValveCardLogsDTO>) {
    const it = new ValveCardLogsDTO();
    it.contentId = dto.contentId;
    it.ValveCardID = dto.ValveCardID;
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

  public static fromEntity(entity: ValveCardLogs) {
    return this.from({
      contentId: entity.ContentID,
      ValveCardID: entity.ValveCardID,
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

  public static toEntity(dto: Partial<ValveCardLogsDTO>) {
    const givenData = new ValveCardLogsDTO();
    givenData.ValveCardID = dto.ValveCardID;
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
