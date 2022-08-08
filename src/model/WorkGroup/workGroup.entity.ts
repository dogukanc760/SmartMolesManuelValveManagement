import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'workGroup' })
export class WorkGroup extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  GatewayID: string;
  @Column({ type: 'varchar', length: 50 })
  Name: string;
  @Column({ type: 'varchar', length: 50 })
  WorkType: string;
  @Column({ type: 'varchar', length: 50 })
  Description: string;
}
