import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { WorkGroupLogs } from 'src/model/WorkGroup/workGroupLogs.entity';
import { WorkGroupLogsController } from './workGroupsLog.controller';
import { WorkGroupsLogDTO } from './workGroupsLog.dto';
import { WorkGroupLogsService } from './workGroupsLog.service';






@Module({
  imports: [TypeOrmModule.forFeature([WorkGroupLogs])],
  providers: [WorkGroupLogsService],
  controllers: [WorkGroupLogsController],
  exports: [],
})
export class WorkGroupLogsModule {}
