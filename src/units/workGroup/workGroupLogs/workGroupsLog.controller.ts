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
import { WorkGroupsLogDTO } from './workGroupsLog.dto';
import { WorkGroupLogsService } from './workGroupsLog.service';
 
  
  
  @Controller('work-group-logs')
  @ApiTags('WorkGroup Logs Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class WorkGroupLogsController {
    constructor(
      private WorkGroupLogsService: WorkGroupLogsService,
    ) {}
  
    @Get()
    public async getAll(): Promise<WorkGroupsLogDTO[]> {
      return await this.WorkGroupLogsService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<WorkGroupsLogDTO> {
      return await this.WorkGroupLogsService.get(id);
    }
  
    @Get('/get-by-work-group/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<WorkGroupsLogDTO[]> {
      return await this.WorkGroupLogsService.getByWorkGroup(id);
    }
  
    @Post()
    public async create(
      @Body() dto: WorkGroupsLogDTO,
    ): Promise<WorkGroupsLogDTO> {
      return await this.WorkGroupLogsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: WorkGroupsLogDTO,
    ): Promise<WorkGroupsLogDTO> {
      return await this.WorkGroupLogsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<WorkGroupsLogDTO> {
      return await this.WorkGroupLogsService.delete(id);
    }
  }
  