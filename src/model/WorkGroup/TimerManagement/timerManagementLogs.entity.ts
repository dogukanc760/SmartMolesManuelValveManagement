import { LogBaseEntity } from "src/model/logBase.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: 'timerManagementLogs' })
export class TimerManagementLogs extends LogBaseEntity {
  @Column({ type: 'varchar', length: 50 })
  TimerManagementID: string;
}
