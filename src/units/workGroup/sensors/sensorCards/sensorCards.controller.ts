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
import { SensorCardsDTO } from './sensorCards.dto';
import { SensorCardsService } from './sensorCards.service';


  
  
  @Controller('sensor-cards')
  @ApiTags('Sensor Cards Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class SensorCardsController {
    constructor(
      private sensorCardsService: SensorCardsService,
    ) {}
  
    @Get()
    public async getAll(): Promise<SensorCardsDTO[]> {
      return await this.sensorCardsService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<SensorCardsDTO> {
      return await this.sensorCardsService.get(id);
    }
  
    @Get('/get-by-sensorcard/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<SensorCardsDTO[]> {
      return await this.sensorCardsService.getByWorkGroup(id);
    }
  
    @Post()
    public async create(
      @Body() dto: SensorCardsDTO,
    ): Promise<SensorCardsDTO> {
      return await this.sensorCardsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: SensorCardsDTO,
    ): Promise<SensorCardsDTO> {
      return await this.sensorCardsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<SensorCardsDTO> {
      return await this.sensorCardsService.delete(id);
    }
  }
  