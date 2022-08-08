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
import { SensorCalibrationLogDTO } from './sensorCalibrationLog.dto';
import { SensorCalibrationLogsService } from './sensorCalibrationLog.service';


  
  
  @Controller('sensor-calibration-log')
  @ApiTags('Sensor Calibration Log Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class SensorCalibrationLogController {
    constructor(
      private sensorCalibrationLogService: SensorCalibrationLogsService,
    ) {}
  
    @Get()
    public async getAll(): Promise<SensorCalibrationLogDTO[]> {
      return await this.sensorCalibrationLogService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<SensorCalibrationLogDTO> {
      return await this.sensorCalibrationLogService.get(id);
    }
  
    @Get('/get-by-sensorcard/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<SensorCalibrationLogDTO[]> {
      return await this.sensorCalibrationLogService.getBySensorCard(id);
    }
  
    @Post()
    public async create(
      @Body() dto: SensorCalibrationLogDTO,
    ): Promise<SensorCalibrationLogDTO> {
      return await this.sensorCalibrationLogService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: SensorCalibrationLogDTO,
    ): Promise<SensorCalibrationLogDTO> {
      return await this.sensorCalibrationLogService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<SensorCalibrationLogDTO> {
      return await this.sensorCalibrationLogService.delete(id);
    }
  }
  