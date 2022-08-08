import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PumpManagementTypes } from 'src/model/WorkGroup/Sensors/pumpManagementTypes.entity';
import { PumpManagementTypesController } from './pumpManagementTypes.controller';
import { PumpManagementTypesService } from './pumpManagementTypes.service';



@Module({
  imports: [TypeOrmModule.forFeature([PumpManagementTypes])],
  providers: [PumpManagementTypesService],
  controllers: [PumpManagementTypesController],
  exports: [],
})
export class PumpManagementTypesModule {}
