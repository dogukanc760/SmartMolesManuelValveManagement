import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Plants } from 'src/model/ExternalUnits/plants.entity';
import { PlantsController } from './plants.controller';
import { PlantService } from './plants.service';


@Module({
  imports: [TypeOrmModule.forFeature([Plants])],
  providers: [PlantService],
  controllers: [PlantsController],
  exports: [],
})
export class PlantsModule {}
