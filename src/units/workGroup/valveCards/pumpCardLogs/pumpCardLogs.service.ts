
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PumpCardLogs } from 'src/model/WorkGroup/ValveCards/pumpCardLogs.entity';
import { Repository } from 'typeorm';
import { PumpCardLogsDTO } from './pumpCardLogs.dto';



@Injectable()
export class PumpCardLogsService {
  constructor(
    @InjectRepository(PumpCardLogs)
    private readonly repo: Repository<PumpCardLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<PumpCardLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => PumpCardLogsDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<PumpCardLogsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => PumpCardLogsDTO.fromEntity(e));
  }

  public async getByWorkGroup(id: string): Promise<PumpCardLogsDTO[]> {
    return await this.repo
      .find({ where: { PumpCardID: id } })
      .then((datas) =>
        datas.map((e) => PumpCardLogsDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: PumpCardLogsDTO,
  ): Promise<PumpCardLogsDTO> {
    return await this.repo
      .save(PumpCardLogsDTO.toEntity(dto))
      .then((e) => PumpCardLogsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: PumpCardLogsDTO,
  ): Promise<PumpCardLogsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = PumpCardLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<PumpCardLogsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = PumpCardLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
