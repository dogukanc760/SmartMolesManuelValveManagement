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
import { GatewayLogsDTO } from './gatewayLogs.dto';
import { GatewayLogsService } from './gatewayLogs.service';


@Controller('gateway-logs')
@ApiTags('Gateway Logs Endpoints')
@UseInterceptors(TransformInterceptor)
export class GatewayLogsController {
  constructor(
    private gatewayLogsService: GatewayLogsService,
  ) {}

  @Get()
  public async getAll(): Promise<GatewayLogsDTO[]> {
    return await this.gatewayLogsService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<GatewayLogsDTO> {
    return await this.gatewayLogsService.get(id);
  }

  @Get('/get-by-gateway/:id')
  public async getById(
    @Param('id') id: string,
  ): Promise<GatewayLogsDTO[]> {
    return await this.gatewayLogsService.getByGateway(id);
  }

  @Post()
  public async create(
    @Body() dto: GatewayLogsDTO,
  ): Promise<GatewayLogsDTO> {
    return await this.gatewayLogsService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: GatewayLogsDTO,
  ): Promise<GatewayLogsDTO> {
    return await this.gatewayLogsService.update(id, dto);
  }

  @Delete(':id')
  public async delete(
    @Param('id') id: string,
  ): Promise<GatewayLogsDTO> {
    return await this.gatewayLogsService.delete(id);
  }
}
