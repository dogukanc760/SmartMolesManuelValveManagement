import { GatewayMoistureConditionsController } from './gatewayMoistureConditions.controller';
import { GatewayMoistureConditionsService } from './gatewayMoistureConditions.service';
import { GatewayMoistureConditions } from './../../../model/Gateway/gatewayMoistureConditions.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [TypeOrmModule.forFeature([GatewayMoistureConditions])],
  providers: [GatewayMoistureConditionsService],
  controllers: [GatewayMoistureConditionsController],
  exports: [],
})
export class GatewayMoistureConditionsModule {}
