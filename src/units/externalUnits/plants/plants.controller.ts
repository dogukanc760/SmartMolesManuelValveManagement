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
import { PlantsDTO } from './plants.dto';
import { PlantService } from './plants.service';


  
  @Controller('plants')
  @ApiTags('Plants Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class PlantsController {
    constructor(private plantsService: PlantService) {}
  
    @Get()
    public async getAll(): Promise<PlantsDTO[]> {
      return this.plantsService.getAllDevicesLocations();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<PlantsDTO> {
      return this.plantsService.getOneDeviceLocation(id);
    }
  
    @Post()
    public async create(
      @Body() dto: PlantsDTO,
    ): Promise<PlantsDTO> {
      return await this.plantsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: PlantsDTO,
    ): Promise<PlantsDTO> {
      return await this.plantsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<PlantsDTO> {
      return await this.plantsService.delete(id);
    }
  }
  