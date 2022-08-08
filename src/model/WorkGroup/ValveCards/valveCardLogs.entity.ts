import { LogBaseEntity } from "src/model/logBase.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: 'valveCardLogs' })
export class ValveCardLogs extends LogBaseEntity {
  @Column({ type: 'varchar', length: 50 })
  ValveCardID: string;
}
