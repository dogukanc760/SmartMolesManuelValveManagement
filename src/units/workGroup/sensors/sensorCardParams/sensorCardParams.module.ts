import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorCardParams } from 'src/model/WorkGroup/Sensors/sensorCardParams.entity';
import { SensorCardParamsController } from './sensorCardParams.controller';
import { SensorCardParamsDTO } from './sensorCardParams.dto';
import { SensorCardParamsService } from './sensorCardParams.service';



@Module({
  imports: [TypeOrmModule.forFeature([SensorCardParams])],
  providers: [SensorCardParamsService],
  controllers: [SensorCardParamsController],
  exports: [],
})
export class SensorCardParamsModule {}
