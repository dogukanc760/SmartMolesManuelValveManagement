import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorCardLogs } from 'src/model/WorkGroup/Sensors/sensorCardLogs.entity';
import { Repository } from 'typeorm';
import { SensorCardLogsDTO } from './sensorCardLogs.dto';





@Injectable()
export class SensorCardLogsService {
  constructor(
    @InjectRepository(SensorCardLogs)
    private readonly repo: Repository<SensorCardLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<SensorCardLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => SensorCardLogsDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<SensorCardLogsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => SensorCardLogsDTO.fromEntity(e));
  }

  public async getBySensorCard(id: string): Promise<SensorCardLogsDTO[]> {
    return await this.repo
      .find({ where: { SensorCardID: id } })
      .then((datas) =>
        datas.map((e) => SensorCardLogsDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: SensorCardLogsDTO,
  ): Promise<SensorCardLogsDTO> {
    return await this.repo
      .save(SensorCardLogsDTO.toEntity(dto))
      .then((e) => SensorCardLogsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: SensorCardLogsDTO,
  ): Promise<SensorCardLogsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = SensorCardLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<SensorCardLogsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = SensorCardLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
