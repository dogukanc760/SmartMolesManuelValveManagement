import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';



@Module({
  imports: [TypeOrmModule.forFeature([Gateway])],
  providers: [GatewayService],
  controllers: [GatewayController],
  exports: [],
})
export class GatewayModule {}
