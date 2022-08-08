import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ModemImeriRecords } from 'src/model/ExternalUnits/modemImeriRecords.entity';
import { ModemImeiRecordsController } from './modemImeiRecords.controller';
import { ModemImeiService } from './modemImeiRecords.service';



@Module({
  imports: [TypeOrmModule.forFeature([ModemImeriRecords])],
  providers: [ModemImeiService],
  controllers: [ModemImeiRecordsController],
  exports: [],
})
export class ModemImeiRecordsModule {}
