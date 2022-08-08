import { GatewayKhasConditions } from './../../../model/Gateway/gatewayKhasConditions.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GatewayKhasConditionsDTO } from './gatewayKhasConditions.dto';

@Injectable()
export class GatewayKhasConditionsService {
  constructor(
    @InjectRepository(GatewayKhasConditions)
    private readonly repo: Repository<GatewayKhasConditions>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<GatewayKhasConditionsDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => GatewayKhasConditionsDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<GatewayKhasConditionsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => GatewayKhasConditionsDTO.fromEntity(e));
  }

  public async getByGateway(id: string): Promise<GatewayKhasConditionsDTO[]> {
    return await this.repo
      .find({ where: { GatewayID: id } })
      .then((datas) =>
        datas.map((e) => GatewayKhasConditionsDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: GatewayKhasConditionsDTO,
  ): Promise<GatewayKhasConditionsDTO> {
    return await this.repo
      .save(GatewayKhasConditionsDTO.toEntity(dto))
      .then((e) => GatewayKhasConditionsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: GatewayKhasConditionsDTO,
  ): Promise<GatewayKhasConditionsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = GatewayKhasConditionsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<GatewayKhasConditionsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = GatewayKhasConditionsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
