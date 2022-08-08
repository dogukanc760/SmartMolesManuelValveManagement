import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'gateway' })
export class Gateway extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  SalesID: string;

  @Column({ type: 'varchar', length: 50 })
  UserID: string;

  @Column({ type: 'varchar', length: 75 })
  Name: string;

  @Column({ type: 'varchar', length: 75 })
  Lang: string;

  @Column({ type: 'varchar', length: 75 })
  Lat: string;

  @Column({ type: 'varchar', length: 75 })
  ServerIP: string;

  @Column({ type: 'varchar', length: 75 })
  ServerPort: string;

  @Column({ type: 'varchar', length: 75 })
  GatewayIP: string;

  @Column({ type: 'varchar', length: 75 })
  GatewayPort: string;

  @Column({ type: 'varchar', length: 75 })
  TelitClientPort: string;
}
