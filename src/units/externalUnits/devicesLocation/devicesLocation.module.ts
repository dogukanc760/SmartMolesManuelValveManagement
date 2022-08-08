import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { DevicesLocationController } from './devicesLocation.controller';
import { DevicesLocationService } from './devicesLocation.service';

@Module({
  imports: [TypeOrmModule.forFeature([DevicesLocation])],
  providers: [DevicesLocationService],
  controllers: [DevicesLocationController],
  exports: [],
})
export class DevicesLocationModule {}
