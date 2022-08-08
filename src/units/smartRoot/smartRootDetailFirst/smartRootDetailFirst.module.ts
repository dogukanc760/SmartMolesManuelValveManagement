import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { SmartRootDetailFirst } from 'src/model/SmartRoot/smartRootDetailFirst.entity';
import { SmartRootDetailFirstController } from './smartRootDetailFirst.controller';
import { SmartRootDetailFirstService } from './smartRootDetailFirst.service';



@Module({
  imports: [TypeOrmModule.forFeature([SmartRootDetailFirst])],
  providers: [SmartRootDetailFirstService],
  controllers: [SmartRootDetailFirstController],
  exports: [],
})
export class SmartRootDetailFirstModule {}
