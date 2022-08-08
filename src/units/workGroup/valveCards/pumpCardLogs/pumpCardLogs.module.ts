import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PumpCardLogs } from 'src/model/WorkGroup/ValveCards/pumpCardLogs.entity';
import { PumpCardLogsController } from './pumpCardLogs.controller';
import { PumpCardLogsService } from './pumpCardLogs.service';




@Module({
  imports: [TypeOrmModule.forFeature([PumpCardLogs])],
  providers: [PumpCardLogsService],
  controllers: [PumpCardLogsController],
  exports: [],
})
export class PumpCardLogsModule {}
