
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TimerManagementLogs } from 'src/model/WorkGroup/TimerManagement/timerManagementLogs.entity';
import { Repository } from 'typeorm';
import { TimerManagementLogsDTO } from './timerManagementLogs.dto';



@Injectable()
export class TimerManagementLogsService {
  constructor(
    @InjectRepository(TimerManagementLogs)
    private readonly repo: Repository<TimerManagementLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<TimerManagementLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => TimerManagementLogsDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<TimerManagementLogsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => TimerManagementLogsDTO.fromEntity(e));
  }

  public async getByWorkGroup(id: string): Promise<TimerManagementLogsDTO[]> {
    return await this.repo
      .find({ where: { TimerManagementID: id } })
      .then((datas) =>
        datas.map((e) => TimerManagementLogsDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: TimerManagementLogsDTO,
  ): Promise<TimerManagementLogsDTO> {
    return await this.repo
      .save(TimerManagementLogsDTO.toEntity(dto))
      .then((e) => TimerManagementLogsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: TimerManagementLogsDTO,
  ): Promise<TimerManagementLogsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = TimerManagementLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<TimerManagementLogsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = TimerManagementLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
