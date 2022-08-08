import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SensorCalibrationLog } from 'src/model/WorkGroup/Sensors/sensorCalibrationLog.entity';
import { SensorCalibrationLogDTO } from './sensorCalibrationLog.dto';




@Injectable()
export class SensorCalibrationLogsService {
  constructor(
    @InjectRepository(SensorCalibrationLog)
    private readonly repo: Repository<SensorCalibrationLog>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<SensorCalibrationLogDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => SensorCalibrationLogDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<SensorCalibrationLogDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => SensorCalibrationLogDTO.fromEntity(e));
  }

  public async getBySensorCard(id: string): Promise<SensorCalibrationLogDTO[]> {
    return await this.repo
      .find({ where: { SensorCardID: id } })
      .then((datas) =>
        datas.map((e) => SensorCalibrationLogDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: SensorCalibrationLogDTO,
  ): Promise<SensorCalibrationLogDTO> {
    return await this.repo
      .save(SensorCalibrationLogDTO.toEntity(dto))
      .then((e) => SensorCalibrationLogDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: SensorCalibrationLogDTO,
  ): Promise<SensorCalibrationLogDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = SensorCalibrationLogDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<SensorCalibrationLogDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = SensorCalibrationLogDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
