import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimerManagementDetail } from 'src/model/WorkGroup/TimerManagement/timerManagementDetail.entity';
import { TimerManagementController } from '../timerManagement/timerManagement.controller';
import { TimerManagementDetailsController } from './timerManagementDetail.controller';
import { TimerManagementDetailDTO } from './timerManagementDetail.dto';
import { TimerManagementDetailService } from './timerManagementDetail.service';


@Module({
  imports: [TypeOrmModule.forFeature([TimerManagementDetail])],
  providers: [TimerManagementDetailService],
  controllers: [TimerManagementDetailsController],
  exports: [],
})
export class TimerManagementDetailModule {}
