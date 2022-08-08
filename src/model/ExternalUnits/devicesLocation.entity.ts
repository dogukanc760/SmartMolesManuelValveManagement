import { LogBaseEntity } from 'src/model/logBase.entity';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'devicesLocation', })
export class DevicesLocation extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  TitleTR: string;
  @Column({ type: 'varchar', length: 50 })
  TitleEN: string;
  @Column({ type: 'varchar', length: 50 })
  ImageUrl: string;
}
