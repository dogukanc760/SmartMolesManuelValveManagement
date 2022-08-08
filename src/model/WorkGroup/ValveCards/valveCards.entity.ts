import { BaseEntity } from 'src/model/base.entity';
import { LogBaseEntity } from 'src/model/logBase.entity';
import {  Column, Entity } from 'typeorm';

@Entity({ name: 'valveCards' })
export class ValveCards extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  WorkGroupID: string;
  @Column({ type: 'varchar', length: 50 })
  SensorCardID: string;
  @Column({ type: 'varchar', length: 50 })
  TimerManagementID: string;
  @Column({ type: 'varchar', length: 50 })
  Name: string;
  @Column({ type: 'boolean', default: false })
  PressureSensor: boolean;
  @Column({ type: 'varchar', length: 50 })
  PressureMin: string;
  @Column({ type: 'varchar', length: 50 })
  PressureMax: string;
  @Column({ type: 'boolean', default: false })
  WaterMeter: boolean;
  @Column({ type: 'varchar', length: 50 })
  ConnectPeriodWhenWork: string;
  @Column({ type: 'varchar', length: 50 })
  ConnectPeriodWhenStop: string;
  @Column({ type: 'varchar', length: 50 })
  LitreMinCount: string;
  @Column({ type: 'varchar', length: 50 })
  LitrePulseCount: string;
  @Column({ type: 'varchar', length: 50 })
  Description: string;
  @Column({ type: 'varchar', length: 50 })
  ValveType: string;
  @Column({ type: 'varchar', length: 50 })
  ValveTypeCount: string;
  @Column({ type: 'varchar', length: 50 })
  Eeprom: string;
  @Column({ type: 'varchar', length: 50 })
  LastConnection: string;
  @Column({ type: 'varchar', length: 50 })
  ValveExit: string;
  @Column({ type: 'varchar', length: 50 })
  MoistureBox: string;
  @Column({ type: 'varchar', length: 50 })
  Tempeture: string;
  @Column({ type: 'varchar', length: 50 })
  Voltage: string;
  @Column({ type: 'varchar', length: 50 })
  WorkMode: string; //Auto/manuel
  @Column({ type: 'boolean', default: false })
  IsOpen: boolean;
  @Column({ type: 'varchar', length: 50 })
  Error: string;
}
