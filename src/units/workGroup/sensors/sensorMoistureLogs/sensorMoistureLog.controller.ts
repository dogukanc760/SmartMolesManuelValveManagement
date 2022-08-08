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
import { SensorMoistureLogDTO } from './sensorMoistureLog.dto';
import { SensorMoistureLogService } from './sensorMoistureLog.service';

  @Controller('sensor-moisture-log')
  @ApiTags('Sensor Moisture Log Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class SensorMoistureLogController {
    constructor(
      private sensorMoistureLogService: SensorMoistureLogService,
    ) {}
  
    @Get()
    public async getAll(): Promise<SensorMoistureLogDTO[]> {
      return await this.sensorMoistureLogService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<SensorMoistureLogDTO> {
      return await this.sensorMoistureLogService.get(id);
    }
  
    @Get('/get-by-sensorcard/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<SensorMoistureLogDTO[]> {
      return await this.sensorMoistureLogService.getBySensorCard(id);
    }
  
    @Post()
    public async create(
      @Body() dto: SensorMoistureLogDTO,
    ): Promise<SensorMoistureLogDTO> {
      return await this.sensorMoistureLogService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: SensorMoistureLogDTO,
    ): Promise<SensorMoistureLogDTO> {
      return await this.sensorMoistureLogService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<SensorMoistureLogDTO> {
      return await this.sensorMoistureLogService.delete(id);
    }
  }
  