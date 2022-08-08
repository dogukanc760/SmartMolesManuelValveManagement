import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatewayLogs } from 'src/model/Gateway/gatewaylogs.entity';
import { GatewayLogsController } from './gatewayLogs.controller';
import { GatewayLogsService } from './gatewayLogs.service';



@Module({
  imports: [TypeOrmModule.forFeature([GatewayLogs])],
  providers: [GatewayLogsService],
  controllers: [GatewayLogsController],
  exports: [],
})
export class GatewayLogsModule {}
