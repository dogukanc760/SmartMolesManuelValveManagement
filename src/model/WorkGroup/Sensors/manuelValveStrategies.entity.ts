import { LogBaseEntity } from 'src/model/logBase.entity';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base.entity';

@Entity({ name: 'manuelValveStrategies' })
export class ManuelValveStrategies extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  SensorCardID: string;
  @Column({ type: 'varchar', length:    50 })
  StrategyType: string;
  @Column({ type: 'varchar', length: 55 })
  Params: string;
  @Column({ type: 'varchar', length: 55 })
  CloseValve: string;
  @Column({ type: 'varchar', length: 55 })
  Message: string;
}
