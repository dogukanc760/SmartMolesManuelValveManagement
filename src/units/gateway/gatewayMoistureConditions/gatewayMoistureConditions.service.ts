import { GatewayMoistureConditions } from './../../../model/Gateway/gatewayMoistureConditions.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GatewayMoistureConditionsDTO } from './gatewayMoistureConditions.dto';

@Injectable()
export class GatewayMoistureConditionsService {
  constructor(
    @InjectRepository(GatewayMoistureConditions)
    private readonly repo: Repository<GatewayMoistureConditions>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<GatewayMoistureConditionsDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => GatewayMoistureConditionsDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<GatewayMoistureConditionsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => GatewayMoistureConditionsDTO.fromEntity(e));
  }

  public async getByGateway(id: string): Promise<GatewayMoistureConditionsDTO[]> {
    return await this.repo
      .find({ where: { GatewayID: id } })
      .then((datas) =>
        datas.map((e) => GatewayMoistureConditionsDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: GatewayMoistureConditionsDTO,
  ): Promise<GatewayMoistureConditionsDTO> {
    return await this.repo
      .save(GatewayMoistureConditionsDTO.toEntity(dto))
      .then((e) => GatewayMoistureConditionsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: GatewayMoistureConditionsDTO,
  ): Promise<GatewayMoistureConditionsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = GatewayMoistureConditionsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<GatewayMoistureConditionsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = GatewayMoistureConditionsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
