import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { SensorCalibrationLog } from 'src/model/WorkGroup/Sensors/sensorCalibrationLog.entity';
import { SensorCardLogs } from 'src/model/WorkGroup/Sensors/sensorCardLogs.entity';
import { SensorCardParams } from 'src/model/WorkGroup/Sensors/sensorCardParams.entity';

export class SensorCardParamsDTO implements Readonly<SensorCardParamsDTO> {
  @ApiProperty()
  contentId: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  lastChangedDateTime: Date;
  @ApiProperty()
  @IsString()
  SensorCardID: string;
  @ApiProperty()
  @IsString()
  StartTime: string;
  @ApiProperty()
  @IsString()
  FinishTime: string;
  @ApiProperty()
  @IsString()
  WorkTime: string;
  @ApiProperty()
  @IsString()
  WaitTime: string;
  @ApiProperty()
  @IsString()
  SummaryWorkTime: string;
  @ApiProperty()
  @IsString()
  DailySummaryWorkTime: string;
  @ApiProperty()
  @IsString()
  CheckDailySummaryWorkTime: string;
  @ApiProperty()
  @IsString()
  TkValue: string;
  @ApiProperty()
  @IsString()
  MoistureRate: string;
  @ApiProperty()
  @IsString()
  StartIrrigationPoint: string;
  @ApiProperty()
  @IsString()
  FieldCondition: string;
  @ApiProperty()
  @IsString()
  FieldRange: string;
  @ApiProperty()
  @IsString()
  RyRate: string;
  @ApiProperty()
  @IsString()
  StartIrrigationPointCondition: string;
  @ApiProperty()
  @IsString()
  ValveManagement: string;
  @ApiProperty()
  @IsString()
  ManagementType: string;
  @ApiProperty()
  @IsString()
  CloseValveTarget: string;
  @ApiProperty()
  @IsString()
  T1T3TargetValue;
  @ApiProperty()
  @IsString()
  IncrementT1Time: string;
  @ApiProperty()
  @IsString()
  ChangeT1Time: string;
  @ApiProperty()
  @IsString()
  DecrementT1Time: string;
  @ApiProperty()
  @IsString()
  T1TimeDownLimit: string;
  @ApiProperty()
  @IsString()
  T1TimeUpLimit: string;
  @ApiProperty()
  @IsString()
  T2TimeDownLimit: string;
  @ApiProperty()
  @IsString()
  T2TimeUpLimit: string;
  @ApiProperty()
  @IsString()
  IncrementT3Time: string;
  @ApiProperty()
  @IsString()
  ChangeT3Time: string;
  @ApiProperty()
  @IsString()
  DecrementT3Time: string;
  @ApiProperty()
  @IsString()
  T3TimeDownLimit: string;
  @ApiProperty()
  @IsString()
  T3TimeUpLimit: string;
  @ApiProperty()
  @IsString()
  TargetKhasRow: string;
  @ApiProperty()
  @IsString()
  TargetKhasCol: string;
  @ApiProperty()
  @IsString()
  CheckPressureSensor: string;
  @ApiProperty()
  @IsString()
  ValveWorkPressureValue: string;
  @ApiProperty()
  @IsString()
  OpenTime: string;
  @ApiProperty()
  @IsString()
  WhenValveCloseBarValue: string;
  @ApiProperty()
  @IsString()
  CloseTime: string;
  @ApiProperty()
  @IsString()
  KhasResetCount: string;
  @ApiProperty()
  @IsString()
  SensorRangeLimit: string;
  @ApiProperty()
  @IsString()
  SensorDigitalRateLimit: string[];

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<SensorCardParamsDTO>) {
    let it = new SensorCardParamsDTO();

    it.contentId = dto.contentId;
    it.SensorCardID = dto.SensorCardID;
    it.StartTime = dto.StartTime;
    it.FinishTime = dto.FinishTime;
    it.WorkTime = dto.WorkTime;
    it.WaitTime = dto.WaitTime;
    it.SummaryWorkTime = dto.SummaryWorkTime;
    it.DailySummaryWorkTime = dto.DailySummaryWorkTime;
    it.CheckDailySummaryWorkTime = dto.CheckDailySummaryWorkTime;
    it.TkValue = dto.TkValue;
    it.MoistureRate = dto.MoistureRate;
    it.StartIrrigationPoint = dto.StartIrrigationPoint;
    it.FieldCondition = dto.FieldCondition;
    it.FieldRange = dto.FieldRange;
    it.RyRate = dto.RyRate;
    it.StartIrrigationPointCondition = dto.StartIrrigationPointCondition;
    it.ValveManagement = dto.ValveManagement;
    it.ManagementType = dto.ManagementType;
    it.CloseValveTarget = dto.CloseValveTarget;
    it.T1T3TargetValue = dto.T1T3TargetValue;
    it.IncrementT1Time = dto.IncrementT1Time;
    it.ChangeT1Time = dto.ChangeT1Time;
    it.DecrementT1Time = dto.DecrementT1Time;
    it.T1TimeDownLimit = dto.T1TimeDownLimit;
    it.T1TimeUpLimit = dto.T1TimeUpLimit;
    it.T2TimeDownLimit = dto.T2TimeDownLimit;
    it.T2TimeUpLimit = dto.T2TimeUpLimit;
    it.IncrementT3Time = dto.IncrementT3Time;
    it.ChangeT3Time = dto.ChangeT3Time;
    it.DecrementT3Time = dto.DecrementT3Time;
    it.T3TimeDownLimit = dto.T3TimeDownLimit;
    it.T3TimeUpLimit = dto.T3TimeUpLimit;
    it.TargetKhasRow = dto.TargetKhasRow;
    it.TargetKhasCol = dto.TargetKhasCol;
    it.CheckPressureSensor = dto.CheckPressureSensor;
    it.ValveWorkPressureValue = dto.ValveWorkPressureValue;
    it.OpenTime = dto.OpenTime;
    it.WhenValveCloseBarValue = dto.WhenValveCloseBarValue;
    it.CloseTime = dto.CloseTime;
    it.KhasResetCount = dto.KhasResetCount;
    it.SensorRangeLimit = dto.SensorRangeLimit;
    it.SensorDigitalRateLimit = dto.SensorDigitalRateLimit;
    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: SensorCardParams) {
    return this.from({
      contentId: entity.ContentID,
      SensorCardID: entity.SensorCardID,
      StartTime: entity.StartTime,
      FinishTime: entity.FinishTime,
      WorkTime: entity.WorkTime,
      WaitTime: entity.WaitTime,
      SummaryWorkTime: entity.SummaryWorkTime,
      DailySummaryWorkTime: entity.DailySummaryWorkTime,
      CheckDailySummaryWorkTime: entity.CheckDailySummaryWorkTime,
      TkValue: entity.TkValue,
      MoistureRate: entity.MoistureRate,
      StartIrrigationPoint: entity.StartIrrigationPoint,
      FieldCondition: entity.FieldCondition,
      FieldRange: entity.FieldRange,
      RyRate: entity.RyRate,
      StartIrrigationPointCondition: entity.StartIrrigationPointCondition,
      ValveManagement: entity.ValveManagement,
      ManagementType: entity.ManagementType,
      CloseValveTarget: entity.CloseValveTarget,
      T1T3TargetValue: entity.T1T3TargetValue,
      IncrementT1Time: entity.IncrementT1Time,
      ChangeT1Time: entity.ChangeT1Time,
      DecrementT1Time: entity.DecrementT1Time,
      T1TimeDownLimit: entity.T1TimeDownLimit,
      T1TimeUpLimit: entity.T1TimeUpLimit,
      T2TimeDownLimit: entity.T2TimeDownLimit,
      T2TimeUpLimit: entity.T2TimeUpLimit,
      IncrementT3Time: entity.IncrementT3Time,
      ChangeT3Time: entity.ChangeT3Time,
      DecrementT3Time: entity.DecrementT3Time,
      T3TimeDownLimit: entity.T3TimeDownLimit,
      T3TimeUpLimit: entity.T3TimeUpLimit,
      TargetKhasRow: entity.TargetKhasRow,
      TargetKhasCol: entity.TargetKhasCol,
      CheckPressureSensor: entity.CheckPressureSensor,
      ValveWorkPressureValue: entity.ValveWorkPressureValue,
      OpenTime: entity.OpenTime,
      WhenValveCloseBarValue: entity.WhenValveCloseBarValue,
      CloseTime: entity.CloseTime,
      KhasResetCount: entity.KhasResetCount,
      SensorRangeLimit: entity.SensorRangeLimit,
      SensorDigitalRateLimit: entity.SensorDigitalRateLimit,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<SensorCardParamsDTO>) {
    const givenData = new SensorCardParams();
    givenData.SensorCardID = dto.SensorCardID;
    givenData.StartTime = dto.StartTime;
    givenData.FinishTime = dto.FinishTime;
    givenData.WorkTime = dto.WorkTime;
    givenData.WaitTime = dto.WaitTime;
    givenData.SummaryWorkTime = dto.SummaryWorkTime;
    givenData.DailySummaryWorkTime = dto.DailySummaryWorkTime;
    givenData.CheckDailySummaryWorkTime = dto.CheckDailySummaryWorkTime;
    givenData.TkValue = dto.TkValue;
    givenData.MoistureRate = dto.MoistureRate;
    givenData.StartIrrigationPoint = dto.StartIrrigationPoint;
    givenData.FieldCondition = dto.FieldCondition;
    givenData.FieldRange = dto.FieldRange;
    givenData.RyRate = dto.RyRate;
    givenData.StartIrrigationPointCondition = dto.StartIrrigationPointCondition;
    givenData.ValveManagement = dto.ValveManagement;
    givenData.ManagementType = dto.ManagementType;
    givenData.CloseValveTarget = dto.CloseValveTarget;
    givenData.T1T3TargetValue = dto.T1T3TargetValue;
    givenData.IncrementT1Time = dto.IncrementT1Time;
    givenData.ChangeT1Time = dto.ChangeT1Time;
    givenData.DecrementT1Time = dto.DecrementT1Time;
    givenData.T1TimeDownLimit = dto.T1TimeDownLimit;
    givenData.T1TimeUpLimit = dto.T1TimeUpLimit;
    givenData.T2TimeDownLimit = dto.T2TimeDownLimit;
    givenData.T2TimeUpLimit = dto.T2TimeUpLimit;
    givenData.IncrementT3Time = dto.IncrementT3Time;
    givenData.ChangeT3Time = dto.ChangeT3Time;
    givenData.DecrementT3Time = dto.DecrementT3Time;
    givenData.T3TimeDownLimit = dto.T3TimeDownLimit;
    givenData.T3TimeUpLimit = dto.T3TimeUpLimit;
    givenData.TargetKhasRow = dto.TargetKhasRow;
    givenData.TargetKhasCol = dto.TargetKhasCol;
    givenData.CheckPressureSensor = dto.CheckPressureSensor;
    givenData.ValveWorkPressureValue = dto.ValveWorkPressureValue;
    givenData.OpenTime = dto.OpenTime;
    givenData.WhenValveCloseBarValue = dto.WhenValveCloseBarValue;
    givenData.CloseTime = dto.CloseTime;
    givenData.KhasResetCount = dto.KhasResetCount;
    givenData.SensorRangeLimit = dto.SensorRangeLimit;
    givenData.SensorDigitalRateLimit = dto.SensorDigitalRateLimit;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
