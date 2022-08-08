import { Column, Entity } from "typeorm";
import { LogBaseEntity } from "../logBase.entity";

@Entity({ name: 'workGroupLogs' })
export class WorkGroupLogs extends LogBaseEntity {
  @Column({ type: 'varchar', length: 50 })
  WorkGroupID: string;
}
