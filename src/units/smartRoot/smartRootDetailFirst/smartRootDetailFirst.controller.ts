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
import { SmartRootDetailFirstDTO } from './smartRootDetailFirst.dto';
import { SmartRootDetailFirstService } from './smartRootDetailFirst.service';

 
  
  @Controller('smart-root-first')
  @ApiTags('Smart Root Detail First Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class SmartRootDetailFirstController {
    constructor(private smartRootDetailFirstService: SmartRootDetailFirstService) {}
  
    @Get()
    public async getAll(): Promise<SmartRootDetailFirstDTO[]> {
      return await this.smartRootDetailFirstService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<SmartRootDetailFirstDTO> {
      return await this.smartRootDetailFirstService.get(id);
    }
  
    @Get('/get-by-smartroot/:id')
    public async getBySmartRoot(@Param('id') id: string): Promise<SmartRootDetailFirstDTO[]> {
      return await this.smartRootDetailFirstService.getBySmartRoot(id);
    }
  
    
  
    @Post()
    public async create(@Body() dto: SmartRootDetailFirstDTO): Promise<SmartRootDetailFirstDTO> {
      return await this.smartRootDetailFirstService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: SmartRootDetailFirstDTO,
    ): Promise<SmartRootDetailFirstDTO> {
      return await this.smartRootDetailFirstService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<SmartRootDetailFirstDTO> {
      return await this.smartRootDetailFirstService.delete(id);
    }
  }
  