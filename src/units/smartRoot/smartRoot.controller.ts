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
import { SmartRootDTO } from './smartRoot.dto';
import { SmartRootService } from './smartRoot.service';
 
  
  @Controller('smart-root')
  @ApiTags('Smart Root Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class SmartRootController {
    constructor(private smartRootService: SmartRootService) {}
  
    @Get()
    public async getAll(): Promise<SmartRootDTO[]> {
      return await this.smartRootService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<SmartRootDTO> {
      return await this.smartRootService.get(id);
    }
  
    @Get('/get-by-gateway/:id')
    public async getById(@Param('id') id: string): Promise<SmartRootDTO[]> {
      return await this.smartRootService.getByGateway(id);
    }
  
    
  
    @Post()
    public async create(@Body() dto: SmartRootDTO): Promise<SmartRootDTO> {
      return await this.smartRootService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: SmartRootDTO,
    ): Promise<SmartRootDTO> {
      return await this.smartRootService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<SmartRootDTO> {
      return await this.smartRootService.delete(id);
    }
  }
  