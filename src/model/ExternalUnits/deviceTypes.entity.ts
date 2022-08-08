import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'deviceTypes' })
export class DeviceTypes extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  Name: string;
}