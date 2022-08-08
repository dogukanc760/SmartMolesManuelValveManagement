import { BaseEntity } from 'src/model/base.entity';
import { LogBaseEntity } from 'src/model/logBase.entity';
import {    Column, Entity } from 'typeorm';

@Entity({ name: 'timerManagementDetail' })
export class TimerManagementDetail extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  TimerManagementID: string;
  @Column({ type: 'varchar', length: 50 })
  SensorCardID: string;
  @Column({ type: 'varchar', length: 50 })
  Name: string;
  @Column({ type:"text", array:true })
  Days: string[];
  @Column({ type: 'varchar', length: 50 })
  StartHour: string;
  @Column({ type: 'varchar', length: 50 })
  FinishHour: string;
  @Column({ type: 'varchar', length: 50 })
  TotalWorkTime: string;
  @Column({ type: 'boolean', default: false})
  IsAuto: boolean;
}
