import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'smartRootDetailFirst' })
export class SmartRootDetailFirst extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  SmartRootID: string;
  @Column({ type:"text", array:true })
  Sensors: string[];
  @Column({ type:"text", array:true })
  SensorDatas: string[];
}
