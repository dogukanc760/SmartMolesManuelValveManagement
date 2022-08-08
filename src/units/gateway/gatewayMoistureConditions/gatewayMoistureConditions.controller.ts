import { GatewayMoistureConditionsService } from './gatewayMoistureConditions.service';
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
import { GatewayMoistureConditionsDTO } from './gatewayMoistureConditions.dto';

@Controller('gateway-moisture-conditions')
@ApiTags('Gateway Moisture Conditions Endpoints')
@UseInterceptors(TransformInterceptor)
export class GatewayMoistureConditionsController {
  constructor(
    private gatewayMoistureConditionsService: GatewayMoistureConditionsService,
  ) {}

  @Get()
  public async getAll(): Promise<GatewayMoistureConditionsDTO[]> {
    return await this.gatewayMoistureConditionsService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<GatewayMoistureConditionsDTO> {
    return await this.gatewayMoistureConditionsService.get(id);
  }

  @Get('/get-by-gateway/:id')
  public async getById(
    @Param('id') id: string,
  ): Promise<GatewayMoistureConditionsDTO[]> {
    return await this.gatewayMoistureConditionsService.getByGateway(id);
  }

  @Post()
  public async create(
    @Body() dto: GatewayMoistureConditionsDTO,
  ): Promise<GatewayMoistureConditionsDTO> {
    return await this.gatewayMoistureConditionsService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: GatewayMoistureConditionsDTO,
  ): Promise<GatewayMoistureConditionsDTO> {
    return await this.gatewayMoistureConditionsService.update(id, dto);
  }

  @Delete(':id')
  public async delete(
    @Param('id') id: string,
  ): Promise<GatewayMoistureConditionsDTO> {
    return await this.gatewayMoistureConditionsService.delete(id);
  }
}
