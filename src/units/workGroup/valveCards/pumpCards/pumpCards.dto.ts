import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { PumpCards } from 'src/model/WorkGroup/ValveCards/PumpCards.entity';

import { isBoolean } from 'util';

export class PumpCardsDTO implements Readonly<PumpCardsDTO> {
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
  ValveID: string;
  @ApiProperty()
  @IsString()
  SensorCardID: string;
  @ApiProperty()
  @IsString()
  Name: string;
  @ApiProperty()
  @IsString()
  ValveManagementType: string;
  @ApiProperty()
  @IsString()
  PumpManagementType: string;
  @ApiProperty()
  @IsBoolean()
  PressureSensor: boolean;
  @ApiProperty()
  @IsString()
  PressureUpLimit: string;
  @ApiProperty()
  @IsString()
  PressureDownLimit: string;
  @ApiProperty()
  @IsString()
  ConnectPeriodWhenWork: string;
  @ApiProperty()
  @IsString()
  ConnectPeriodWhenStop: string;
  @ApiProperty()
  @IsBoolean()
  WaterMeter: boolean;
  @ApiProperty()
  @IsString()
  LitrePulseCount: string;
  @ApiProperty()
  @IsBoolean()
  DigitalPump: boolean;
  @ApiProperty()
  @IsString()
  Description: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<PumpCardsDTO>) {
    const it = new PumpCardsDTO();
    it.contentId = dto.contentId;
    it.ValveID = dto.ValveID;
    it.SensorCardID = dto.SensorCardID;
    it.Name = dto.Name;
    it.ValveManagementType = dto.ValveManagementType;
    it.PumpManagementType = dto.PumpManagementType;
    it.PressureSensor = dto.PressureSensor;
    it.PressureUpLimit = dto.PressureUpLimit;
    it.PressureDownLimit = dto.PressureDownLimit;
    it.ConnectPeriodWhenWork = dto.ConnectPeriodWhenWork;
    it.ConnectPeriodWhenStop = dto.ConnectPeriodWhenStop;
    it.WaterMeter = dto.WaterMeter;
    it.LitrePulseCount = dto.LitrePulseCount;
    it.DigitalPump = dto.DigitalPump;
    it.Description = dto.Description;
    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: PumpCards) {
    return this.from({
      contentId: entity.ContentID,
      ValveID : entity.ValveID,
      SensorCardID : entity.SensorCardID,
      Name : entity.Name,
      ValveManagementType: entity.ValveManagementType,
      PumpManagementType: entity.PumpManagementType,
      PressureSensor: entity.PressureSensor,
      PressureUpLimit : entity.PressureUpLimit,
      PressureDownLimit: entity.PressureDownLimit,
      ConnectPeriodWhenStop : entity.ConnectPeriodWhenStop,
      ConnectPeriodWhenWork : entity.ConnectPeriodWhenWork,
      WaterMeter : entity.WaterMeter,
      LitrePulseCount : entity.LitrePulseCount,
      DigitalPump : entity.DigitalPump,
      Description : entity.Description,
      
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<PumpCardsDTO>) {
    const givenData = new PumpCardsDTO();
    givenData.ValveID = dto.ValveID;
    givenData.SensorCardID = dto.SensorCardID;
    givenData.Name = dto.Name;
    givenData.ValveManagementType = dto.ValveManagementType;
    givenData.PumpManagementType = dto.PumpManagementType;
    givenData.PressureSensor = dto.PressureSensor;
    givenData.PressureUpLimit = dto.PressureUpLimit;
    givenData.PressureDownLimit = dto.PressureDownLimit;
    givenData.ConnectPeriodWhenWork = dto.ConnectPeriodWhenWork;
    givenData.ConnectPeriodWhenStop = dto.ConnectPeriodWhenStop;
    givenData.WaterMeter = dto.WaterMeter;
    givenData.LitrePulseCount = dto.LitrePulseCount;
    givenData.DigitalPump = dto.DigitalPump;
    givenData.Description = dto.Description;
    givenData.createdAt =  new Date();
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
