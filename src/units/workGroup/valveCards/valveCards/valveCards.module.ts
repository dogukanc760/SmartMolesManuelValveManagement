import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValveCards } from 'src/model/WorkGroup/ValveCards/valveCards.entity';
import { ValveCardsController } from './valveCards.controller';
import { ValveCardsService } from './valveCards.service';

@Module({
  imports: [TypeOrmModule.forFeature([ValveCards])],
  providers: [ValveCardsService],
  controllers: [ValveCardsController],
  exports: [],
})
export class ValveCardsModule {}
