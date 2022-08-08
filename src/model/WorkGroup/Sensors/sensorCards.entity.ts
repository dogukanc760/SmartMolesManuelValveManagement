import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base.entity';

@Entity({ name: 'sensorCards' })
export class SensorCards extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  WorkGroupID: string;
  @Column({ type: 'varchar', length: 50 })
  Name: string;
  @Column({ type: 'int' })
  ConnectPeriodWhenStop: number;
  @Column({ type: 'int' })
  ConnectPeriodWhenWork: number;
  @Column({ type: 'varchar', length: 50 })
  IrrigationTypes: string;
  @Column({ type: 'varchar', length: 50 })
  DripperRanges: string;
  @Column({ type: 'varchar', length: 50 })
  SensorType: string;
  @Column({ type: 'varchar', length: 50 })
  PlantType: string;
  @Column({ type: 'varchar', length: 50 })
  SensorLocation: string;
}
