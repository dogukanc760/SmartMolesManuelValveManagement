import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { SimCards } from 'src/model/ExternalUnits/simCards.entity';
import { SimCardsController } from './simCards.controller';
import { SimCardsService } from './simCards.service';



@Module({
  imports: [TypeOrmModule.forFeature([SimCards])],
  providers: [SimCardsService],
  controllers: [SimCardsController],
  exports: [],
})
export class SimCardsModule {}
