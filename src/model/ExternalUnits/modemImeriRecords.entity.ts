import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'modemImeriRecords' })
export class ModemImeriRecords extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  GatewayID: string;
  @Column({ type: 'varchar', length: 50 })
  UserID: string;
  @Column({ type: 'varchar', length: 50 })
  ImeiNumber: string;
}
