import { Column, PrimaryGeneratedColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

export abstract class LogBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn({name:'ContentID', type: 'uuid'})
  ContentID: string;

  @Column({ type: 'varchar', length: 350 })
  LogContent: string;

  @Column({ type: 'varchar', length: 350 })
  LogTitle: string;

  @Column({ type: 'varchar', length: 350 })
  LogDescription: string;

  @Column({ type: 'varchar', length: 50 })
  LogStatus: string;

  @Column({ type: 'boolean', default: true })
  isDeleted: boolean;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;
}
