import { Column, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @PrimaryColumn({name:'ContentID', type: 'uuid'})
    ContentID: string;

    @Column({type:'boolean', default: true})
    isDeleted: boolean;

    @Column({type:'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({type:'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;
      
}