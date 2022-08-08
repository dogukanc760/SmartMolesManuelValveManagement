import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GatewayLogs } from 'src/model/Gateway/gatewaylogs.entity';
import { ManuelValveStrategies } from 'src/model/WorkGroup/Sensors/manuelValveStrategies.entity';
import { ManuelValveStrategiesDTO } from './manuelValveStrategies.dto';



@Injectable()
export class ManuelValveStrategiesService {
  constructor(
    @InjectRepository(ManuelValveStrategies)
    private readonly repo: Repository<ManuelValveStrategies>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<ManuelValveStrategiesDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => ManuelValveStrategiesDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<ManuelValveStrategiesDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => ManuelValveStrategiesDTO.fromEntity(e));
  }

  public async getBySensorCard(id: string): Promise<ManuelValveStrategiesDTO[]> {
    return await this.repo
      .find({ where: { SensorCardID: id } })
      .then((datas) =>
        datas.map((e) => ManuelValveStrategiesDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: ManuelValveStrategiesDTO,
  ): Promise<ManuelValveStrategiesDTO> {
    return await this.repo
      .save(ManuelValveStrategiesDTO.toEntity(dto))
      .then((e) => ManuelValveStrategiesDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: ManuelValveStrategiesDTO,
  ): Promise<ManuelValveStrategiesDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = ManuelValveStrategiesDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<ManuelValveStrategiesDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = ManuelValveStrategiesDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
