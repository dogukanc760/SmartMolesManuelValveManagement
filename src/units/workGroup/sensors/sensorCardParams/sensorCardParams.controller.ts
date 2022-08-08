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
import { SensorCardParamsDTO } from './sensorCardParams.dto';
import { SensorCardParamsService } from './sensorCardParams.service';


  
  
  @Controller('sensor-card-params')
  @ApiTags('Sensor Card Params Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class SensorCardParamsController {
    constructor(
      private sensorCardParamsService: SensorCardParamsService,
    ) {}
  
    @Get()
    public async getAll(): Promise<SensorCardParamsDTO[]> {
      return await this.sensorCardParamsService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<SensorCardParamsDTO> {
      return await this.sensorCardParamsService.get(id);
    }
  
    @Get('/get-by-sensorcard/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<SensorCardParamsDTO[]> {
      return await this.sensorCardParamsService.getBySensorCard(id);
    }
  
    @Post()
    public async create(
      @Body() dto: SensorCardParamsDTO,
    ): Promise<SensorCardParamsDTO> {
      return await this.sensorCardParamsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: SensorCardParamsDTO,
    ): Promise<SensorCardParamsDTO> {
      return await this.sensorCardParamsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<SensorCardParamsDTO> {
      return await this.sensorCardParamsService.delete(id);
    }
  }
  