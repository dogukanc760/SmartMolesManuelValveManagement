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
import { IrrigationTypesDTO } from './irrigationTypes.dto';
import { IrrigationTypesService } from './irrigationTypes.service';

  
  @Controller('irrigation-types')
  @ApiTags('Irrigation Types Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class IrrigationTypesController {
    constructor(private irrigationTypesService: IrrigationTypesService) {}
  
    @Get()
    public async getAll(): Promise<IrrigationTypesDTO[]> {
      return this.irrigationTypesService.getAllDevicesLocations();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<IrrigationTypesDTO> {
      return this.irrigationTypesService.getOneDeviceLocation(id);
    }
  
    @Post()
    public async create(
      @Body() dto: IrrigationTypesDTO,
    ): Promise<IrrigationTypesDTO> {
      return await this.irrigationTypesService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: IrrigationTypesDTO,
    ): Promise<IrrigationTypesDTO> {
      return await this.irrigationTypesService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<IrrigationTypesDTO> {
      return await this.irrigationTypesService.delete(id);
    }
  }
  