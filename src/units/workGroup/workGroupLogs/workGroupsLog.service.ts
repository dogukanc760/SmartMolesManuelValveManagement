
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkGroupLogs } from 'src/model/WorkGroup/WorkGrouplogs.entity';
import { WorkGroupsLogDTO } from './workGroupsLog.dto';



@Injectable()
export class WorkGroupLogsService {
  constructor(
    @InjectRepository(WorkGroupLogs)
    private readonly repo: Repository<WorkGroupLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<WorkGroupsLogDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => WorkGroupsLogDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<WorkGroupsLogDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => WorkGroupsLogDTO.fromEntity(e));
  }

  public async getByWorkGroup(id: string): Promise<WorkGroupsLogDTO[]> {
    return await this.repo
      .find({ where: { WorkGroupID: id } })
      .then((datas) =>
        datas.map((e) => WorkGroupsLogDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: WorkGroupsLogDTO,
  ): Promise<WorkGroupsLogDTO> {
    return await this.repo
      .save(WorkGroupsLogDTO.toEntity(dto))
      .then((e) => WorkGroupsLogDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: WorkGroupsLogDTO,
  ): Promise<WorkGroupsLogDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = WorkGroupsLogDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<WorkGroupsLogDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = WorkGroupsLogDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
