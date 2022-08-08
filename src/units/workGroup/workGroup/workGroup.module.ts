import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { WorkGroup } from 'src/model/WorkGroup/workGroup.entity';
import { WorkGroupController } from './workGroup.controller';
import { WorkGroupService } from './workGroup.service';





@Module({
  imports: [TypeOrmModule.forFeature([WorkGroup])],
  providers: [WorkGroupService],
  controllers: [WorkGroupController],
  exports: [],
})
export class WorkGroupModule {}
