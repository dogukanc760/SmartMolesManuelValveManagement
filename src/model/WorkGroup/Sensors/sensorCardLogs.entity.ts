import { LogBaseEntity } from 'src/model/logBase.entity';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base.entity';

@Entity({ name: 'sensorCardLogs' })
export class SensorCardLogs extends LogBaseEntity {
  @Column({ type: 'varchar', length: 50 })
  SensorCardID: string;
}
