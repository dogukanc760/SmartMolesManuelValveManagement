import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TimerManagement } from 'src/model/WorkGroup/TimerManagement/timerManagement.entity';
import { Repository } from 'typeorm';
import { TimerManagementDTO } from './timerManagement.dto';




@Injectable()
export class TimerManagementService {
  constructor(
    @InjectRepository(TimerManagement)
    private readonly repo: Repository<TimerManagement>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<TimerManagementDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => TimerManagementDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<TimerManagementDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => TimerManagementDTO.fromEntity(e));
  }

  public async getByWorkGroup(id: string): Promise<TimerManagementDTO[]> {
    return await this.repo
      .find({ where: { WorkGroupID: id } })
      .then((datas) =>
        datas.map((e) => TimerManagementDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: TimerManagementDTO,
  ): Promise<TimerManagementDTO> {
    return await this.repo
      .save(TimerManagementDTO.toEntity(dto))
      .then((e) => TimerManagementDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: TimerManagementDTO,
  ): Promise<TimerManagementDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = TimerManagementDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<TimerManagementDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = TimerManagementDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
