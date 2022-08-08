import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { IrrigationTypes } from 'src/model/ExternalUnits/irrigationTypes.entity';
import { IrrigationTypesController } from './irrigationTypes.controller';
import { IrrigationTypesService } from './irrigationTypes.service';


@Module({
  imports: [TypeOrmModule.forFeature([IrrigationTypes])],
  providers: [IrrigationTypesService],
  controllers: [IrrigationTypesController],
  exports: [],
})
export class IrrigationTypesModule {}
