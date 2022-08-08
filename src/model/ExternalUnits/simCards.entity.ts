import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'simCards' })
export class SimCards extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  GatewayID: string;
  @Column({ type: 'varchar', length: 50 })
  UserID: string;
  @Column({ type: 'varchar', length: 50 })
  SerialNumber: string;
  @Column({ type: 'varchar', length: 50 })
  StaticIP: string;
  @Column({ type: 'varchar', length: 50 })
  Port: string;
}
