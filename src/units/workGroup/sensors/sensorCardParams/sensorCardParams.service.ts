import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorCardParams } from 'src/model/WorkGroup/Sensors/sensorCardParams.entity';
import { Repository } from 'typeorm';
import { SensorCardParamsDTO } from './sensorCardParams.dto';





@Injectable()
export class SensorCardParamsService {
  constructor(
    @InjectRepository(SensorCardParams)
    private readonly repo: Repository<SensorCardParams>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<SensorCardParamsDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => SensorCardParamsDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<SensorCardParamsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => SensorCardParamsDTO.fromEntity(e));
  }

  public async getBySensorCard(id: string): Promise<SensorCardParamsDTO[]> {
    return await this.repo
      .find({ where: { SensorCardID: id } })
      .then((datas) =>
        datas.map((e) => SensorCardParamsDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: SensorCardParamsDTO,
  ): Promise<SensorCardParamsDTO> {
    return await this.repo
      .save(SensorCardParamsDTO.toEntity(dto))
      .then((e) => SensorCardParamsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: SensorCardParamsDTO,
  ): Promise<SensorCardParamsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = SensorCardParamsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<SensorCardParamsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = SensorCardParamsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
