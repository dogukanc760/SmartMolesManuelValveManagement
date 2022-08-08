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
import { TimerManagementLogsDTO } from './timerManagementLogs.dto';
import { TimerManagementLogsService } from './timerManagementLogs.service';

  
  
  @Controller('timer-management-logs')
  @ApiTags('Timer Management Logs Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class TimerManagementLogsController {
    constructor(
      private timerManagementLogsService: TimerManagementLogsService,
    ) {}
  
    @Get()
    public async getAll(): Promise<TimerManagementLogsDTO[]> {
      return await this.timerManagementLogsService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<TimerManagementLogsDTO> {
      return await this.timerManagementLogsService.get(id);
    }
  
    @Get('/get-by-work-group/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<TimerManagementLogsDTO[]> {
      return await this.timerManagementLogsService.getByWorkGroup(id);
    }
  
    @Post()
    public async create(
      @Body() dto: TimerManagementLogsDTO,
    ): Promise<TimerManagementLogsDTO> {
      return await this.timerManagementLogsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: TimerManagementLogsDTO,
    ): Promise<TimerManagementLogsDTO> {
      return await this.timerManagementLogsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<TimerManagementLogsDTO> {
      return await this.timerManagementLogsService.delete(id);
    }
  }
  