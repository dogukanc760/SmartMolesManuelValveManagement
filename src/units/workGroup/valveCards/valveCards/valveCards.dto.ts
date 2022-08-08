import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { PumpCards } from 'src/model/WorkGroup/ValveCards/PumpCards.entity';
import { ValveCards } from 'src/model/WorkGroup/ValveCards/valveCards.entity';

import { isBoolean } from 'util';

export class ValveCardsDTO implements Readonly<ValveCardsDTO> {
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
  SensorCardID: string;
  @ApiProperty({ required: false })
  @IsString()
  TimerManagementID: string;
  @ApiProperty()
  @IsString()
  Name: string;
  @ApiProperty()
  @IsBoolean()
  WaterMeter: boolean;
  @ApiProperty()
  @IsBoolean()
  PressureSensor: boolean;
  @ApiProperty()
  @IsString()
  PressureMin: string;
  @ApiProperty()
  @IsString()
  PressureMax: string;
  @ApiProperty()
  @IsString()
  ConnectPeriodWhenWork: string;
  @ApiProperty()
  @IsString()
  ConnectPeriodWhenStop: string;
  @ApiProperty()
  @IsString()
  LitreMinCount: string;
  @ApiProperty()
  @IsString()
  LitrePulseCount: string;
  @ApiProperty()
  @IsString()
  Description: string;
  @ApiProperty()
  @IsString()
  ValveType: string;
  @ApiProperty()
  @IsString()
  ValveTypeCount: string;
  @ApiProperty()
  @IsString()
  Eeprom: string;
  @ApiProperty()
  @IsString()
  LastConnection: string;
  @ApiProperty()
  @IsString()
  ValveExit: string;
  @ApiProperty()
  @IsString()
  MoistureBox: string;
  @ApiProperty()
  @IsString()
  Tempeture: string;
  @ApiProperty()
  @IsString()
  Voltage: string;
  @ApiProperty()
  @IsString()
  WorkMode: string;
  @ApiProperty()
  @IsBoolean()
  IsOpen: boolean;
  @ApiProperty()
  @IsString()
  Error:string;
  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<ValveCardsDTO>) {
    const it = new ValveCardsDTO();
    it.contentId = dto.contentId;
    it.WorkGroupID = dto.WorkGroupID;
    it.SensorCardID = dto.SensorCardID;
    it.TimerManagementID = dto.TimerManagementID;
    it.Name = dto.Name;
   
    it.PressureSensor = dto.PressureSensor;
    it.PressureMin = dto.PressureMin;
    it.PressureMax = dto.PressureMax;
    it.ConnectPeriodWhenWork = dto.ConnectPeriodWhenWork;
    it.ConnectPeriodWhenStop = dto.ConnectPeriodWhenStop;
    it.WaterMeter = dto.WaterMeter;
    it.LitrePulseCount = dto.LitrePulseCount;
    it.LitreMinCount = dto.LitreMinCount;
    it.Description = dto.Description;
    it.ValveType = dto.ValveType;
    it.ValveTypeCount = dto.ValveTypeCount;
    it.Eeprom = dto.Eeprom;
    it.LastConnection = dto.LastConnection;
    it.ValveExit = dto.ValveExit;
    it.MoistureBox = dto.MoistureBox;
    it.Tempeture = dto.Tempeture;
    it.Voltage = dto.Voltage;
    it.WorkMode = dto.WorkMode;
    it.IsOpen = dto.IsOpen;
    it.Error = dto.Error;
    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: ValveCards) {
    return this.from({
      contentId: entity.ContentID,
      WorkGroupID : entity.WorkGroupID,
      SensorCardID : entity.SensorCardID,
      TimerManagementID : entity.TimerManagementID,
      Name : entity.Name,
      PressureSensor: entity.PressureSensor,
      PressureMax : entity.PressureMax,
      PressureMin: entity.PressureMin,
      ConnectPeriodWhenStop : entity.ConnectPeriodWhenStop,
      ConnectPeriodWhenWork : entity.ConnectPeriodWhenWork,
      WaterMeter : entity.WaterMeter,
      LitrePulseCount : entity.LitrePulseCount,
      Description : entity.Description,
      LitreMinCount: entity.LitreMinCount,
      Eeprom : entity.Eeprom,
      Error : entity.Error,
      IsOpen : entity.IsOpen,
      LastConnection : entity.LastConnection,
      MoistureBox : entity.MoistureBox,
      Tempeture : entity.Tempeture,
      ValveExit : entity.ValveExit,
      ValveType : entity.ValveType,
      ValveTypeCount : entity.ValveTypeCount,
      Voltage: entity.Voltage,
      WorkMode : entity.WorkMode,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<ValveCardsDTO>) {
    const givenData = new ValveCardsDTO();
    givenData.WorkGroupID = dto.WorkGroupID;
    givenData.SensorCardID = dto.SensorCardID;
    givenData.TimerManagementID = dto.TimerManagementID;
    givenData.Name = dto.Name;
    givenData.PressureSensor = dto.PressureSensor;
    givenData.PressureMin = dto.PressureMin;
    givenData.PressureMax = dto.PressureMax;
    givenData.WaterMeter = dto.WaterMeter;
    givenData.ConnectPeriodWhenWork = dto.ConnectPeriodWhenWork;
    givenData.ConnectPeriodWhenStop = dto.ConnectPeriodWhenStop;
    givenData.WaterMeter = dto.WaterMeter;
    givenData.LitrePulseCount = dto.LitrePulseCount;
    givenData.LitreMinCount = dto.LitreMinCount;
    givenData.Description = dto.Description;
    givenData.ValveType = dto.ValveType;
    givenData.ValveTypeCount = dto.ValveTypeCount;
    givenData.Eeprom = dto.Eeprom;
    givenData.LastConnection = dto.LastConnection;
    givenData.ValveExit = dto.ValveExit;
    givenData.MoistureBox = dto.MoistureBox;
    givenData.Tempeture = dto.Tempeture;
    givenData.Voltage = dto.Voltage;
    givenData.WorkMode = dto.WorkMode;
    givenData.IsOpen = dto.IsOpen;
    givenData.Error = dto.Error;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
