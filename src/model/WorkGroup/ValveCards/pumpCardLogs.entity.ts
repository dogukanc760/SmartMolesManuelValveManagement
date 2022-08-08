import { LogBaseEntity } from "src/model/logBase.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: 'pumpCardLogs' })
export class PumpCardLogs extends LogBaseEntity {
  @Column({ type: 'varchar', length: 50 })
  PumpCardID: string;
}
