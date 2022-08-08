import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'smartRoot' })
export class SmartRoot extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  GatewayID: string;
  @Column({ type: 'varchar', length: 50 })
  Name: string;
}
