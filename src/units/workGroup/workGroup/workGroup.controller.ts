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
import { WorkGroupDTO } from './workGroup.dto';
import { WorkGroupService } from './workGroup.service';

 
  
  @Controller('work-group')
  @ApiTags('Work Group Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class WorkGroupController {
    constructor(private workGroupService: WorkGroupService) {}
  
    @Get()
    public async getAll(): Promise<WorkGroupDTO[]> {
      return await this.workGroupService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<WorkGroupDTO> {
      return await this.workGroupService.get(id);
    }
  
    @Get('/get-by-gateway/:id')
    public async getById(@Param('id') id: string): Promise<WorkGroupDTO[]> {
      return await this.workGroupService.getByGateway(id);
    }
  
    
  
    @Post()
    public async create(@Body() dto: WorkGroupDTO): Promise<WorkGroupDTO> {
      return await this.workGroupService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: WorkGroupDTO,
    ): Promise<WorkGroupDTO> {
      return await this.workGroupService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<WorkGroupDTO> {
      return await this.workGroupService.delete(id);
    }
  }
  