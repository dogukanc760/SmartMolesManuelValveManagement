import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';

import { DevicesLocationDTO } from './devicesLocation.dto';
import { DevicesLocationService } from './devicesLocation.service';

@Controller('devices-location')
@ApiTags('Devices Location Endpoints')
@UseInterceptors(TransformInterceptor)
export class DevicesLocationController {
  constructor(private deviceLocationService: DevicesLocationService) {}

  @Get()
  public async getAll(): Promise<DevicesLocationDTO[]> {
    return this.deviceLocationService.getAllDevicesLocations();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<DevicesLocationDTO> {
    return this.deviceLocationService.getOneDeviceLocation(id);
  }

  @Post()
  public async create(
    @Body() dto: DevicesLocationDTO,
  ): Promise<DevicesLocationDTO> {
    return await this.deviceLocationService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: DevicesLocationDTO,
  ): Promise<DevicesLocationDTO> {
    return await this.deviceLocationService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<DevicesLocationDTO> {
    return await this.deviceLocationService.delete(id);
  }
}
