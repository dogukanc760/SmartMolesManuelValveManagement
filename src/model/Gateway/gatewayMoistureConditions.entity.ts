import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'gatewayMoistureConditions' })
export class GatewayMoistureConditions extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  GatewayID: string;

  @Column({ type: 'varchar', length: 50 })
  PackageLenght: number;

  @Column({ type: 'varchar', length: 50 })
  EepromAddress: string;

  @Column({ type: 'varchar', length: 50 })
  Command: string;

  @Column({ type: 'varchar', length: 50 })
  ReadPeriod: string;

  @Column({ type: 'varchar', length: 50 })
  SendingType: string;
}
