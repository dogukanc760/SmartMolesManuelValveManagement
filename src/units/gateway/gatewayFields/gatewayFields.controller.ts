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
import { GatewayFieldsDTO } from './gatewayFields.dto';
import { GatewayFieldsService } from './gatewayFields.service';

@Controller('gateway-fields')
@ApiTags('Gateway Fields Endpoints')
@UseInterceptors(TransformInterceptor)
export class GatewayFieldsController {
  constructor(private gatewayService: GatewayFieldsService) {}

  @Get()
  public async getAll(): Promise<GatewayFieldsDTO[]> {
    return await this.gatewayService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<GatewayFieldsDTO> {
    return await this.gatewayService.get(id);
  }

  @Get('/get-by-gateway/:id')
  public async getBySales(
    @Param('id') id: string,
  ): Promise<GatewayFieldsDTO[]> {
    return await this.gatewayService.getByGateway(id);
  }

  @Get('/get-by-name/:name')
  public async getByName(
    @Param('name') name: string,
  ): Promise<GatewayFieldsDTO[]> {
    return await this.gatewayService.getByName(name);
  }

  @Post()
  public async create(
    @Body() dto: GatewayFieldsDTO,
  ): Promise<GatewayFieldsDTO> {
    return await this.gatewayService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: GatewayFieldsDTO,
  ): Promise<GatewayFieldsDTO> {
    return await this.gatewayService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<GatewayFieldsDTO> {
    return await this.gatewayService.delete(id);
  }
}
