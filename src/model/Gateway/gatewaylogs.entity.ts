import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { LogBaseEntity } from '../logBase.entity';

@Entity({ name: 'gatewayLogs' })
export class GatewayLogs extends LogBaseEntity {
  @Column({ type: 'varchar', length: 50 })
  GatewayID: string;
}
