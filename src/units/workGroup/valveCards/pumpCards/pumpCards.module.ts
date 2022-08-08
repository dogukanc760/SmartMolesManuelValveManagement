import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PumpCards } from 'src/model/WorkGroup/ValveCards/pumpCards.entity';
import { PumpCardsController } from './pumpCards.controller';
import { PumpCardsService } from './pumpCards.service';

@Module({
  imports: [TypeOrmModule.forFeature([PumpCards])],
  providers: [PumpCardsService],
  controllers: [PumpCardsController],
  exports: [],
})
export class PumpCardsModule {}
