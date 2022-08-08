import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorCards } from 'src/model/WorkGroup/Sensors/sensorCards.entity';
import { SensorCardsController } from './sensorCards.controller';
import { SensorCardsService } from './sensorCards.service';


@Module({
  imports: [TypeOrmModule.forFeature([SensorCards])],
  providers: [SensorCardsService],
  controllers: [SensorCardsController],
  exports: [],
})
export class SensorCardsModule {}
