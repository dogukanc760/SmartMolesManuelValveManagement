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
import { ManuelValveStrategies } from 'src/model/WorkGroup/Sensors/manuelValveStrategies.entity';
import { ManuelValveStrategiesDTO } from './manuelValveStrategies.dto';
import { ManuelValveStrategiesService } from './manuelValveStrategies.service';

  
  
  @Controller('manuel-valve-strategies')
  @ApiTags('Manuel Valve Strategies Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class ManuelValveStrategiesController {
    constructor(
      private manuelValveService: ManuelValveStrategiesService,
    ) {}
  
    @Get()
    public async getAll(): Promise<ManuelValveStrategiesDTO[]> {
      return await this.manuelValveService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<ManuelValveStrategiesDTO> {
      return await this.manuelValveService.get(id);
    }
  
    @Get('/get-by-gateway/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<ManuelValveStrategiesDTO[]> {
      return await this.manuelValveService.getBySensorCard(id);
    }
  
    @Post()
    public async create(
      @Body() dto: ManuelValveStrategiesDTO,
    ): Promise<ManuelValveStrategiesDTO> {
      return await this.manuelValveService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: ManuelValveStrategiesDTO,
    ): Promise<ManuelValveStrategiesDTO> {
      return await this.manuelValveService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<ManuelValveStrategiesDTO> {
      return await this.manuelValveService.delete(id);
    }
  }
  