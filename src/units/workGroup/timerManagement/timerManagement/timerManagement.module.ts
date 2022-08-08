import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimerManagement } from 'src/model/WorkGroup/TimerManagement/timerManagement.entity';
import { TimerManagementController } from './timerManagement.controller';
import { TimerManagementService } from './timerManagement.service';



@Module({
  imports: [TypeOrmModule.forFeature([TimerManagement])],
  providers: [TimerManagementService],
  controllers: [TimerManagementController],
  exports: [],
})
export class TimerManagementModule {}
