import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceTypes } from 'src/model/ExternalUnits/deviceTypes.entity';
import { DeviceTypesController } from './devicesTypes.controller';
import { DeviceTypesService } from './devicesTypes.service';



@Module({
  imports: [TypeOrmModule.forFeature([DeviceTypes])],
  providers: [DeviceTypesService],
  controllers: [DeviceTypesController],
  exports: [],
})
export class DeviceTypesModule {}
