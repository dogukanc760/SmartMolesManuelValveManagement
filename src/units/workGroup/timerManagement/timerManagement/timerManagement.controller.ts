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
import { TimerManagementDTO } from './timerManagement.dto';
import { TimerManagementService } from './timerManagement.service';


  
  
  @Controller('timer-management')
  @ApiTags('Timer Management Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class TimerManagementController {
    constructor(
      private timerManagementService: TimerManagementService,
    ) {}
  
    @Get()
    public async getAll(): Promise<TimerManagementDTO[]> {
      return await this.timerManagementService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<TimerManagementDTO> {
      return await this.timerManagementService.get(id);
    }
  
    @Get('/get-by-gateway/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<TimerManagementDTO[]> {
      return await this.timerManagementService.getByWorkGroup(id);
    }
  
    @Post()
    public async create(
      @Body() dto: TimerManagementDTO,
    ): Promise<TimerManagementDTO> {
      return await this.timerManagementService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: TimerManagementDTO,
    ): Promise<TimerManagementDTO> {
      return await this.timerManagementService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<TimerManagementDTO> {
      return await this.timerManagementService.delete(id);
    }
  }
  