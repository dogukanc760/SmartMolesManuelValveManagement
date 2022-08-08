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
import { PumpCardsDTO } from './pumpCards.dto';
import { PumpCardsService } from './pumpCards.service';


  
  
  @Controller('pump-cards')
  @ApiTags('Pump Cards Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class PumpCardsController {
    constructor(
      private pumpCardsService: PumpCardsService,
    ) {}
  
    @Get()
    public async getAll(): Promise<PumpCardsDTO[]> {
      return await this.pumpCardsService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<PumpCardsDTO> {
      return await this.pumpCardsService.get(id);
    }
  
    @Get('/get-by-valve/:id')
    public async getByValve(
      @Param('id') id: string,
    ): Promise<PumpCardsDTO[]> {
      return await this.pumpCardsService.getByValve(id);
    }

    @Get('/get-by-sensor-card/:id')
    public async getBySensorCard(
      @Param('id') id: string,
    ): Promise<PumpCardsDTO[]> {
      return await this.pumpCardsService.getBySensorCard(id);
    }

    @Get('/get-by-pumpmanagement-type/:id')
    public async getByPumpManagementType(
      @Param('id') id: string,
    ): Promise<PumpCardsDTO[]> {
      return await this.pumpCardsService.getByPumpManagementType(id);
    }
  
    @Get('/get-by-valvemanagement-type/:id')
    public async getByValveManagementType(
      @Param('id') id: string,
    ): Promise<PumpCardsDTO[]> {
      return await this.pumpCardsService.getByValveManagementType(id);
    }
  
  
  
    @Post()
    public async create(
      @Body() dto: PumpCardsDTO,
    ): Promise<PumpCardsDTO> {
      return await this.pumpCardsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: PumpCardsDTO,
    ): Promise<PumpCardsDTO> {
      return await this.pumpCardsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<PumpCardsDTO> {
      return await this.pumpCardsService.delete(id);
    }
  }
  