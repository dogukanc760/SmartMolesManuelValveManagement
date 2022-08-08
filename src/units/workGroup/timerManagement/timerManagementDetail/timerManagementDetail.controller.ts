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
import { TimerManagementDetailDTO } from './timerManagementDetail.dto';
import { TimerManagementDetailService } from './timerManagementDetail.service';

  
  
  @Controller('timer-management-details')
  @ApiTags('Timer Management Details Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class TimerManagementDetailsController {
    constructor(
      private timerManagementDetails: TimerManagementDetailService,
    ) {}
  
    @Get()
    public async getAll(): Promise<TimerManagementDetailDTO[]> {
      return await this.timerManagementDetails.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<TimerManagementDetailDTO> {
      return await this.timerManagementDetails.get(id);
    }
  
    @Get('/get-by-sensorcard/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<TimerManagementDetailDTO[]> {
      return await this.timerManagementDetails.getBySensorCard(id);
    }

    @Get('/get-by-timer-management/:id')
    public async getByTimer(
        @Param('id') id: string,
      ): Promise<TimerManagementDetailDTO[]> {
        return await this.timerManagementDetails.getByTimerManagement(id);
      }
  
    @Post()
    public async create(
      @Body() dto: TimerManagementDetailDTO,
    ): Promise<TimerManagementDetailDTO> {
      return await this.timerManagementDetails.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: TimerManagementDetailDTO,
    ): Promise<TimerManagementDetailDTO> {
      return await this.timerManagementDetails.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<TimerManagementDetailDTO> {
      return await this.timerManagementDetails.delete(id);
    }
  }
  