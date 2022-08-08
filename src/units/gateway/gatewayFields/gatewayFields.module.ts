import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatewayFields } from 'src/model/Gateway/gatewayFields.entity';
import { GatewayFieldsController } from './gatewayFields.controller';
import { GatewayFieldsService } from './gatewayFields.service';




@Module({
  imports: [TypeOrmModule.forFeature([GatewayFields])],
  providers: [GatewayFieldsService],
  controllers: [GatewayFieldsController],
  exports: [],
})
export class GatewayFieldsModule {}
