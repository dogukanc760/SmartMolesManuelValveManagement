import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManuelValveStrategies } from 'src/model/WorkGroup/Sensors/manuelValveStrategies.entity';
import { ManuelValveStrategiesController } from './manuelValveStrategies.controller';
import { ManuelValveStrategiesService } from './manuelValveStrategies.service';




@Module({
  imports: [TypeOrmModule.forFeature([ManuelValveStrategies])],
  providers: [ManuelValveStrategiesService],
  controllers: [ManuelValveStrategiesController],
  exports: [],
})
export class ManuelValveStrategiesModule {}
