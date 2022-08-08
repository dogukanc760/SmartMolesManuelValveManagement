import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimerManagementLogs } from 'src/model/WorkGroup/TimerManagement/timerManagementLogs.entity';
import { TimerManagementLogsController } from './timerManagementLogs.controller';
import { TimerManagementLogsService } from './timerManagementLogs.service';




@Module({
  imports: [TypeOrmModule.forFeature([TimerManagementLogs])],
  providers: [TimerManagementLogsService],
  controllers: [TimerManagementLogsController],
  exports: [],
})
export class TimerManagementLogsModule {}
