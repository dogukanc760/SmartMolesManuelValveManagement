import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseInterceptors,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger';
  import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { ValveCardsDTO } from './valveCards.dto';
import { ValveCardsService } from './valveCards.service';



  
  
  @Controller('valve-cards')
  @ApiTags('Valve Cards Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class ValveCardsController {
    constructor(
      private valveCardsService: ValveCardsService,
    ) {}
  
    @Get()
    public async getAll(): Promise<ValveCardsDTO[]> {
      return await this.valveCardsService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<ValveCardsDTO> {
      return await this.valveCardsService.get(id);
    }
  
    @Get('/get-by-work-group/:id')
    public async getByWorkGroup(
      @Param('id') id: string,
    ): Promise<ValveCardsDTO[]> {
      return await this.valveCardsService.getByWorkGroup(id);
    }

    @Get('/get-by-sensor-card/:id')
    public async getBySensorCard(
      @Param('id') id: string,
    ): Promise<ValveCardsDTO[]> {
      return await this.valveCardsService.getBySensorCard(id);
    }

    @Get('/get-by-timer-management/:id')
    public async getByTimerManagement(
      @Param('id') id: string,
    ): Promise<ValveCardsDTO[]> {
      return await this.valveCardsService.getByTimerManagement(id);
    }
  

  
  
    @Post()
    public async create(
      @Body() dto: ValveCardsDTO,
    ): Promise<ValveCardsDTO> {
      return await this.valveCardsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: ValveCardsDTO,
    ): Promise<ValveCardsDTO> {
      return await this.valveCardsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<ValveCardsDTO> {
      return await this.valveCardsService.delete(id);
    }
  }
  