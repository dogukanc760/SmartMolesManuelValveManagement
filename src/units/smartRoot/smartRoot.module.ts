import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { SmartRoot } from 'src/model/SmartRoot/smartRoot.entity';
import { SmartRootController } from './smartRoot.controller';
import { SmartRootService } from './smartRoot.service';




@Module({
  imports: [TypeOrmModule.forFeature([SmartRoot])],
  providers: [SmartRootService],
  controllers: [SmartRootController],
  exports: [],
})
export class SmartRootModule {}
