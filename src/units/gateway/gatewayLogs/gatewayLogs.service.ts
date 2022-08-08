import { GatewayKhasConditions } from './../../../model/Gateway/gatewayKhasConditions.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GatewayLogs } from 'src/model/Gateway/gatewaylogs.entity';
import { GatewayLogsDTO } from './gatewayLogs.dto';


@Injectable()
export class GatewayLogsService {
  constructor(
    @InjectRepository(GatewayLogs)
    private readonly repo: Repository<GatewayLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<GatewayLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => GatewayLogsDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<GatewayLogsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => GatewayLogsDTO.fromEntity(e));
  }

  public async getByGateway(id: string): Promise<GatewayLogsDTO[]> {
    return await this.repo
      .find({ where: { GatewayID: id } })
      .then((datas) =>
        datas.map((e) => GatewayLogsDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: GatewayLogsDTO,
  ): Promise<GatewayLogsDTO> {
    return await this.repo
      .save(GatewayLogsDTO.toEntity(dto))
      .then((e) => GatewayLogsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: GatewayLogsDTO,
  ): Promise<GatewayLogsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = GatewayLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<GatewayLogsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = GatewayLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
