import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValveCardLogs } from 'src/model/WorkGroup/ValveCards/valveCardLogs.entity';
import { ValveCardLogsController } from './valveCardLogs.controller';
import { ValveCardLogsServices } from './valveCardLogs.service';


@Module({
  imports: [TypeOrmModule.forFeature([ValveCardLogs])],
  providers: [ValveCardLogsServices],
  controllers: [ValveCardLogsController],
  exports: [],
})
export class ValveCardLogsModule {}
