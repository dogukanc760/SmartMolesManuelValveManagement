import { GatewayKhasConditionsController } from './gatewayKhasConditions.controller';
import { GatewayKhasConditionsService } from './gatewayKhasConditions.service';
import { GatewayKhasConditions } from './../../../model/Gateway/gatewayKhasConditions.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [TypeOrmModule.forFeature([GatewayKhasConditions])],
  providers: [GatewayKhasConditionsService],
  controllers: [GatewayKhasConditionsController],
  exports: [],
})
export class GatewayKhasConditionsModule {}
