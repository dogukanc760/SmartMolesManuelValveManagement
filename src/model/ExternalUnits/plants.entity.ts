import {  Column, Entity } from "typeorm";
import { BaseEntity } from '../base.entity';



@Entity({ name: 'plants' })
export class Plants extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  TitleTR: string;
  @Column({ type: 'varchar', length: 50 })
  TitleEN: string;
  @Column({ type: 'varchar', length: 50 })
  RootRange: string;
  @Column({ type: 'varchar', length: 50 })
  ActiveRootRange: string;
}
