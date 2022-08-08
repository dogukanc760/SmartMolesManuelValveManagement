import { GatewayKhasConditionsService } from './gatewayKhasConditions.service';
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
import { GatewayKhasConditionsDTO } from './gatewayKhasConditions.dto';

@Controller('gateway-khas-conditions')
@ApiTags('Gateway Khas Conditions Endpoints')
@UseInterceptors(TransformInterceptor)
export class GatewayKhasConditionsController {
  constructor(
    private gatewayKhasConditionsService: GatewayKhasConditionsService,
  ) {}

  @Get()
  public async getAll(): Promise<GatewayKhasConditionsDTO[]> {
    return await this.gatewayKhasConditionsService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<GatewayKhasConditionsDTO> {
    return await this.gatewayKhasConditionsService.get(id);
  }

  @Get('/get-by-gateway/:id')
  public async getById(
    @Param('id') id: string,
  ): Promise<GatewayKhasConditionsDTO[]> {
    return await this.gatewayKhasConditionsService.getByGateway(id);
  }

  @Post()
  public async create(
    @Body() dto: GatewayKhasConditionsDTO,
  ): Promise<GatewayKhasConditionsDTO> {
    return await this.gatewayKhasConditionsService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: GatewayKhasConditionsDTO,
  ): Promise<GatewayKhasConditionsDTO> {
    return await this.gatewayKhasConditionsService.update(id, dto);
  }

  @Delete(':id')
  public async delete(
    @Param('id') id: string,
  ): Promise<GatewayKhasConditionsDTO> {
    return await this.gatewayKhasConditionsService.delete(id);
  }
}
