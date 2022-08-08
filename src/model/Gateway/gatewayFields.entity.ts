import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'gatewayFields' })
export class GatewayFields extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  GatewayID: string;
  @Column({ type: 'varchar', length: 50 })
  Name: string;
  @Column({ type: 'varchar', length: 50 })
  Description: string;
  @Column({ type: 'varchar', length: 50 })
  Lang: string;
  @Column({ type: 'varchar', length: 50 })
  Lat: string;
}
