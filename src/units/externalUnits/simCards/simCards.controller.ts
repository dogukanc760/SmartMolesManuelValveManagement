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
import { SimCardsDTO } from './simCards.dto';
import { SimCardsService } from './simCards.service';



  
  @Controller('simCards')
  @ApiTags('SimCards Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class SimCardsController {
    constructor(private simCardsService: SimCardsService) {}
  
    @Get()
    public async getAll(): Promise<SimCardsDTO[]> {
      return this.simCardsService.getAllDevicesLocations();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<SimCardsDTO> {
      return this.simCardsService.getOneDeviceLocation(id);
    }
  
    @Post()
    public async create(
      @Body() dto: SimCardsDTO,
    ): Promise<SimCardsDTO> {
      return await this.simCardsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: SimCardsDTO,
    ): Promise<SimCardsDTO> {
      return await this.simCardsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<SimCardsDTO> {
      return await this.simCardsService.delete(id);
    }
  }
  