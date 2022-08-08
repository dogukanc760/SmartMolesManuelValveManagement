import { BaseEntity } from 'src/model/base.entity';
import { LogBaseEntity } from 'src/model/logBase.entity';
import {   Column, Entity } from 'typeorm';

@Entity({ name: 'timerManagement' })
export class TimerManagement extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  WorkGroupID: string;
  @Column({ type: 'varchar', length: 50 })
  TimerName: string;
}
