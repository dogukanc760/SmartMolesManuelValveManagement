import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { SmartRootDetailSecond } from 'src/model/SmartRoot/smartRootDetailSecond.entity';
import { SmartRootDetailSecondController } from './smartRootDetailSecond.controller';
import { SmartRootDetailSecondService } from './smartRootDetailSecond.service';



@Module({
  imports: [TypeOrmModule.forFeature([SmartRootDetailSecond])],
  providers: [SmartRootDetailSecondService],
  controllers: [SmartRootDetailSecondController],
  exports: [],
})
export class SmartRootDetailSecondModule {}
