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
import { ModemImeiRecordsDTO } from './modemImeiRecords.dto';
import { ModemImeiService } from './modemImeiRecords.service';

  
  @Controller('modem-imei-records')
  @ApiTags('Modem Imei Records Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class ModemImeiRecordsController {
    constructor(private modemImeiRecordsService: ModemImeiService) {}
  
    @Get()
    public async getAll(): Promise<ModemImeiRecordsDTO[]> {
      return this.modemImeiRecordsService.getAllDevicesLocations();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<ModemImeiRecordsDTO> {
      return this.modemImeiRecordsService.getOneDeviceLocation(id);
    }
  
    @Post()
    public async create(
      @Body() dto: ModemImeiRecordsDTO,
    ): Promise<ModemImeiRecordsDTO> {
      return await this.modemImeiRecordsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: ModemImeiRecordsDTO,
    ): Promise<ModemImeiRecordsDTO> {
      return await this.modemImeiRecordsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<ModemImeiRecordsDTO> {
      return await this.modemImeiRecordsService.delete(id);
    }
  }
  