import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base.entity';

@Entity({ name: 'sensorCalibrationLog' })
export class SensorCalibrationLog extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  SensorCardID: string;
  @Column({ type:"text", array:true })
  Sensors: string[];
  @Column({ type:"text", array:true })
  SensorDatas: string[];
  @Column({type:'varchar', length:100})
  SensorDatasAverage: string;
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  GetDataAt: Date;
}
