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
import { PumpManagementTypesDTO } from './pumpManagementTypes.dto';
import { PumpManagementTypesService } from './pumpManagementTypes.service';


  
  
  @Controller('pump-management-types')
  @ApiTags('Pump Management Types Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class PumpManagementTypesController {
    constructor(
      private pumpManagementTypesService: PumpManagementTypesService,
    ) {}
  
    @Get()
    public async getAll(): Promise<PumpManagementTypesDTO[]> {
      return await this.pumpManagementTypesService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<PumpManagementTypesDTO> {
      return await this.pumpManagementTypesService.get(id);
    }
  
 
  
    @Post()
    public async create(
      @Body() dto: PumpManagementTypesDTO,
    ): Promise<PumpManagementTypesDTO> {
      return await this.pumpManagementTypesService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: PumpManagementTypesDTO,
    ): Promise<PumpManagementTypesDTO> {
      return await this.pumpManagementTypesService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<PumpManagementTypesDTO> {
      return await this.pumpManagementTypesService.delete(id);
    }
  }
  