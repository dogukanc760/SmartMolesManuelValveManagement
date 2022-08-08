import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorCardLogs } from 'src/model/WorkGroup/Sensors/sensorCardLogs.entity';
import { SensorCardLogsController } from './sensorCardLogs.controller';
import { SensorCardLogsService } from './sensorCardLogs.service';


@Module({
  imports: [TypeOrmModule.forFeature([SensorCardLogs])],
  providers: [SensorCardLogsService],
  controllers: [SensorCardLogsController],
  exports: [],
})
export class SensorCardLogsModule {}
