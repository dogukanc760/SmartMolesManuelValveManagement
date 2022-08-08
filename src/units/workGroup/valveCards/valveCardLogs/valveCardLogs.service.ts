
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValveCardLogs } from 'src/model/WorkGroup/ValveCards/valveCardLogs.entity';
import { Repository } from 'typeorm';
import { ValveCardLogsDTO } from './valveCardLogs.dto';


@Injectable()
export class ValveCardLogsServices {
  constructor(
    @InjectRepository(ValveCardLogs)
    private readonly repo: Repository<ValveCardLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<ValveCardLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => ValveCardLogsDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<ValveCardLogsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => ValveCardLogsDTO.fromEntity(e));
  }

  public async getByValve(id: string): Promise<ValveCardLogsDTO[]> {
    return await this.repo
      .find({ where: { ValveCardID: id } })
      .then((datas) =>
        datas.map((e) => ValveCardLogsDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: ValveCardLogsDTO,
  ): Promise<ValveCardLogsDTO> {
    return await this.repo
      .save(ValveCardLogsDTO.toEntity(dto))
      .then((e) => ValveCardLogsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: ValveCardLogsDTO,
  ): Promise<ValveCardLogsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = ValveCardLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<ValveCardLogsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = ValveCardLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
