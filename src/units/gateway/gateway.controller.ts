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
import { GatewayDTO } from './gateway.dto';
import { GatewayService } from './gateway.service';

@Controller('gateway')
@ApiTags('Gateway Endpoints')
@UseInterceptors(TransformInterceptor)
export class GatewayController {
  constructor(private gatewayService: GatewayService) {}

  @Get()
  public async getAll(): Promise<GatewayDTO[]> {
    return await this.gatewayService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<GatewayDTO> {
    return await this.gatewayService.get(id);
  }

  @Get('/get-by-user/:id')
  public async getById(@Param('id') id: string): Promise<GatewayDTO[]> {
    return await this.gatewayService.getByUser(id);
  }

  @Get('/get-by-sales/:id')
  public async getBySales(@Param('id') id: string): Promise<GatewayDTO[]> {
    return await this.gatewayService.getBySales(id);
  }

  @Get('/get-by-name/:name')
  public async getByName(@Param('name') name: string): Promise<GatewayDTO[]>{
    return await this.gatewayService.getByName(name);
  }

  @Post()
  public async create(@Body() dto: GatewayDTO): Promise<GatewayDTO> {
    return await this.gatewayService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: GatewayDTO,
  ): Promise<GatewayDTO> {
    return await this.gatewayService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<GatewayDTO> {
    return await this.gatewayService.delete(id);
  }
}
