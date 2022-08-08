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
import { SmartRootDetailSecondDTO } from './smartRootDetailSecond.dto';
import { SmartRootDetailSecondService } from './smartRootDetailSecond.service';

 
  
  @Controller('smart-root-second')
  @ApiTags('Smart Root Detail Second Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class SmartRootDetailSecondController {
    constructor(private smartRootDetailSecondService: SmartRootDetailSecondService) {}
  
    @Get()
    public async getAll(): Promise<SmartRootDetailSecondDTO[]> {
      return await this.smartRootDetailSecondService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<SmartRootDetailSecondDTO> {
      return await this.smartRootDetailSecondService.get(id);
    }
  
    @Get('/get-by-smartroot/:id')
    public async getBySmartRoot(@Param('id') id: string): Promise<SmartRootDetailSecondDTO[]> {
      return await this.smartRootDetailSecondService.getBySmartRoot(id);
    }
  
    
  
    @Post()
    public async create(@Body() dto: SmartRootDetailSecondDTO): Promise<SmartRootDetailSecondDTO> {
      return await this.smartRootDetailSecondService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: SmartRootDetailSecondDTO,
    ): Promise<SmartRootDetailSecondDTO> {
      return await this.smartRootDetailSecondService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<SmartRootDetailSecondDTO> {
      return await this.smartRootDetailSecondService.delete(id);
    }
  }
  