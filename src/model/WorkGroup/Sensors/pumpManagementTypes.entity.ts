import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base.entity';

@Entity({ name: 'pumpManagementTypes' })
export class PumpManagementTypes extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  TitleTR: string;
  @Column({ type: 'varchar', length: 50 })
  TitleEN: string;
}
