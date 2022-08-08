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
import { SensorCardLogsDTO } from './sensorCardLogs.dto';
import { SensorCardLogsService } from './sensorCardLogs.service';

  
  
  @Controller('sensor-card-log')
  @ApiTags('Sensor Card Log Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class SensorCardLogsController {
    constructor(
      private sensorCardLogService: SensorCardLogsService,
    ) {}
  
    @Get()
    public async getAll(): Promise<SensorCardLogsDTO[]> {
      return await this.sensorCardLogService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<SensorCardLogsDTO> {
      return await this.sensorCardLogService.get(id);
    }
  
    @Get('/get-by-sensorcard/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<SensorCardLogsDTO[]> {
      return await this.sensorCardLogService.getBySensorCard(id);
    }
  
    @Post()
    public async create(
      @Body() dto: SensorCardLogsDTO,
    ): Promise<SensorCardLogsDTO> {
      return await this.sensorCardLogService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: SensorCardLogsDTO,
    ): Promise<SensorCardLogsDTO> {
      return await this.sensorCardLogService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<SensorCardLogsDTO> {
      return await this.sensorCardLogService.delete(id);
    }
  }
  