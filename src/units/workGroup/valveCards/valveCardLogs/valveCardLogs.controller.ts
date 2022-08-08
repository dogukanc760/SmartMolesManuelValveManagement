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
import { ValveCardLogsDTO } from './valveCardLogs.dto';
import { ValveCardLogsServices } from './valveCardLogs.service';

@Controller('valve-cards-logs')
@ApiTags('Valve Cards Logs Endpoints')
@UseInterceptors(TransformInterceptor)
export class ValveCardLogsController {
  constructor(private valveCardLogsService: ValveCardLogsServices) {}

  @Get()
  public async getAll(): Promise<ValveCardLogsDTO[]> {
    return await this.valveCardLogsService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<ValveCardLogsDTO> {
    return await this.valveCardLogsService.get(id);
  }

  @Get('/get-by-work-group/:id')
  public async getById(@Param('id') id: string): Promise<ValveCardLogsDTO[]> {
    return await this.valveCardLogsService.getByValve(id);
  }

  @Post()
  public async create(@Body() dto: ValveCardLogsDTO): Promise<ValveCardLogsDTO> {
    return await this.valveCardLogsService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: ValveCardLogsDTO,
  ): Promise<ValveCardLogsDTO> {
    return await this.valveCardLogsService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<ValveCardLogsDTO> {
    return await this.valveCardLogsService.delete(id);
  }
}
