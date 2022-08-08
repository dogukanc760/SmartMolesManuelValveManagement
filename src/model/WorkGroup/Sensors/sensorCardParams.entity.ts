import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base.entity';

@Entity({ name: 'sensorCardParams' })
export class SensorCardParams extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  SensorCardID: string;
  @Column({ type: 'varchar', length: 50 })
  StartTime: string;
  @Column({ type: 'varchar', length: 50 })
  FinishTime: string;
  @Column({ type: 'varchar', length: 50 })
  WorkTime: string;
  @Column({ type: 'varchar', length: 50 })
  WaitTime: string;
  @Column({ type: 'varchar', length: 50 })
  SummaryWorkTime: string;
  @Column({ type: 'varchar', length: 50 })
  DailySummaryWorkTime: string;
  @Column({ type: 'varchar', length: 50 })
  CheckDailySummaryWorkTime: string;
  @Column({ type: 'varchar', length: 50 })
  TkValue: string;
  @Column({ type: 'varchar', length: 50 })
  MoistureRate: string;
  @Column({ type: 'varchar', length: 50 })
  StartIrrigationPoint: string;
  @Column({ type: 'varchar', length: 50 })
  FieldCondition: string;
  @Column({ type: 'varchar', length: 50 })
  FieldRange: string;
  @Column({ type: 'varchar', length: 50 })
  RyRate: string;
  @Column({ type: 'varchar', length: 50 })
  StartIrrigationPointCondition: string;
  @Column({ type: 'varchar', length: 50 })
  ValveManagement: string;
  @Column({ type: 'varchar', length: 50 })
  ManagementType: string;
  @Column({ type: 'varchar', length: 50 })
  CloseValveTarget: string;
  @Column({ type: 'varchar', length: 50 })  
  
  T1T3TargetValue: string;
  @Column({ type: 'varchar', length: 50 })
  IncrementT1Time: string;
  @Column({ type: 'varchar', length: 50 })
  ChangeT1Time: string;
  @Column({ type: 'varchar', length: 50 })
  DecrementT1Time: string;
  @Column({ type: 'varchar', length: 50 })
  T1TimeDownLimit: string;
  @Column({ type: 'varchar', length: 50 })
  T1TimeUpLimit: string;
  @Column({ type: 'varchar', length: 50 })
  T2TimeDownLimit: string;
  @Column({ type: 'varchar', length: 50 })
  T2TimeUpLimit: string;
  @Column({ type: 'varchar', length: 50 })
  IncrementT3Time: string;
  @Column({ type: 'varchar', length: 50 })
  ChangeT3Time: string;
  @Column({ type: 'varchar', length: 50 })
  DecrementT3Time: string;
  @Column({ type: 'varchar', length: 50 })
  T3TimeDownLimit: string;
  @Column({ type: 'varchar', length: 50 })
  T3TimeUpLimit: string;
  @Column({ type: 'varchar', length: 50 })
  TargetKhasRow: string;
  @Column({ type: 'varchar', length: 50 })
  TargetKhasCol: string;
  @Column({ type: 'varchar', length: 50 })
  CheckPressureSensor: string;
  @Column({ type: 'varchar', length: 50 })
  ValveWorkPressureValue: string;
  @Column({ type: 'varchar', length: 50 })
  OpenTime: string;
  @Column({ type: 'varchar', length: 50 })
  WhenValveCloseBarValue: string;
  @Column({ type: 'varchar', length: 50 })
  CloseTime: string;
  @Column({ type: 'varchar', length: 50 })
  KhasResetCount: string;
  @Column({ type: 'varchar', length: 50 })
  SensorRangeLimit: string;
  @Column({ type:"text", array:true })
  SensorDigitalRateLimit: string[];
}
