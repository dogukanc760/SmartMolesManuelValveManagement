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
import { DevicesTypesDTO } from './devicesTypes.dto';
import { DeviceTypesService } from './devicesTypes.service';

  
  @Controller('devices-types')
  @ApiTags('Devices Types Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class DeviceTypesController {
    constructor(private deviceTypesService: DeviceTypesService) {}
  
    @Get()
    public async getAll(): Promise<DevicesTypesDTO[]> {
      return this.deviceTypesService.getAllDevs();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<DevicesTypesDTO> {
      return this.deviceTypesService.getOneDeviceLocation(id);
    }
  
    @Post()
    public async create(
      @Body() dto: DevicesTypesDTO,
    ): Promise<DevicesTypesDTO> {
      return await this.deviceTypesService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: DevicesTypesDTO,
    ): Promise<DevicesTypesDTO> {
      
      return await this.deviceTypesService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<DevicesTypesDTO> {
      return await this.deviceTypesService.delete(id);
    }
  }
  