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
import { PumpCardLogsDTO } from './pumpCardLogs.dto';
import { PumpCardLogsService } from './pumpCardLogs.service';


  
  
  @Controller('pump-cards-logs')
  @ApiTags('Pump Cards Logs Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class PumpCardLogsController {
    constructor(
      private pumpCardLogsService: PumpCardLogsService,
    ) {}
  
    @Get()
    public async getAll(): Promise<PumpCardLogsDTO[]> {
      return await this.pumpCardLogsService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<PumpCardLogsDTO> {
      return await this.pumpCardLogsService.get(id);
    }
  
    @Get('/get-by-work-group/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<PumpCardLogsDTO[]> {
      return await this.pumpCardLogsService.getByWorkGroup(id);
    }
  
    @Post()
    public async create(
      @Body() dto: PumpCardLogsDTO,
    ): Promise<PumpCardLogsDTO> {
      return await this.pumpCardLogsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: PumpCardLogsDTO,
    ): Promise<PumpCardLogsDTO> {
      return await this.pumpCardLogsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<PumpCardLogsDTO> {
      return await this.pumpCardLogsService.delete(id);
    }
  }
  