import { BaseEntity } from 'src/model/base.entity';
import { LogBaseEntity } from 'src/model/logBase.entity';
import {  Column, Entity } from 'typeorm';

@Entity({ name: 'pumpCards' })
export class PumpCards extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  ValveID: string;
  @Column({ type: 'varchar', length: 50 })
  SensorCardID: string;
  @Column({ type: 'varchar', length: 50 })
  Name: string;
  @Column({ type: 'varchar', length: 50 })
  ValveManagementType: string;
  @Column({ type: 'varchar', length: 50 })
  PumpManagementType: string;
  @Column({ type: 'boolean', default: false })
  PressureSensor: boolean;
  @Column({ type: 'varchar', length: 50 })
  PressureUpLimit: string;
  @Column({ type: 'varchar', default: false })
  PressureDownLimit: string;
  @Column({ type: 'varchar', length: 50 })
  ConnectPeriodWhenWork: string;
  @Column({ type: 'varchar', length: 50 })
  ConnectPeriodWhenStop: string;
  
  @Column({ type: 'boolean', default: false })
  WaterMeter: boolean;
  @Column({ type: 'varchar', length: 50 })
  LitrePulseCount: string;
  @Column({ type: 'boolean', default: false })
  DigitalPump: boolean;
  @Column({ type: 'varchar', length: 50 })
  Description: string;
}
