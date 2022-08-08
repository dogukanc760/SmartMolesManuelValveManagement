import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorCalibrationLog } from 'src/model/WorkGroup/Sensors/sensorCalibrationLog.entity';
import { SensorCalibrationLogController } from './sensorCalibrationLog.controller';
import { SensorCalibrationLogsService } from './sensorCalibrationLog.service';




@Module({
  imports: [TypeOrmModule.forFeature([SensorCalibrationLog])],
  providers: [SensorCalibrationLogsService],
  controllers: [SensorCalibrationLogController],
  exports: [],
})
export class SensorCalibrationLogModule {}
