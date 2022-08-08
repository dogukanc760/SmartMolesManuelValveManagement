import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorMoistureLog } from 'src/model/WorkGroup/Sensors/sensorMoistureLog.entity';
import { Repository } from 'typeorm';
import { SensorMoistureLogDTO } from './sensorMoistureLog.dto';





@Injectable()
export class SensorMoistureLogService {
  constructor(
    @InjectRepository(SensorMoistureLog)
    private readonly repo: Repository<SensorMoistureLog>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<SensorMoistureLogDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => SensorMoistureLogDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<SensorMoistureLogDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => SensorMoistureLogDTO.fromEntity(e));
  }

  public async getBySensorCard(id: string): Promise<SensorMoistureLogDTO[]> {
    return await this.repo
      .find({ where: { SensorCardID: id } })
      .then((datas) =>
        datas.map((e) => SensorMoistureLogDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: SensorMoistureLogDTO,
  ): Promise<SensorMoistureLogDTO> {
    return await this.repo
      .save(SensorMoistureLogDTO.toEntity(dto))
      .then((e) => SensorMoistureLogDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: SensorMoistureLogDTO,
  ): Promise<SensorMoistureLogDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = SensorMoistureLogDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<SensorMoistureLogDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = SensorMoistureLogDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
