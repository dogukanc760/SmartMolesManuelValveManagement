import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorMoistureLog } from 'src/model/WorkGroup/Sensors/sensorMoistureLog.entity';
import { SensorMoistureLogController } from './sensorMoistureLog.controller';
import { SensorMoistureLogService } from './sensorMoistureLog.service';


@Module({
  imports: [TypeOrmModule.forFeature([SensorMoistureLog])],
  providers: [SensorMoistureLogService],
  controllers: [SensorMoistureLogController],
  exports: [],
})
export class SensorMoistureLogModule {}
