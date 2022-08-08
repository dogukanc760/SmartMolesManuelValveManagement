import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TimerManagementDetail } from 'src/model/WorkGroup/TimerManagement/timerManagementDetail.entity';
import { Repository } from 'typeorm';
import { TimerManagementDetailDTO } from './timerManagementDetail.dto';


@Injectable()
export class TimerManagementDetailService {
  constructor(
    @InjectRepository(TimerManagementDetail)
    private readonly repo: Repository<TimerManagementDetail>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<TimerManagementDetailDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => TimerManagementDetailDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<TimerManagementDetailDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => TimerManagementDetailDTO.fromEntity(e));
  }

  public async getBySensorCard(id: string): Promise<TimerManagementDetailDTO[]> {
    return await this.repo
      .find({ where: { SensorCardID: id } })
      .then((datas) =>
        datas.map((e) => TimerManagementDetailDTO.fromEntity(e)),
      );
  }

  public async getByTimerManagement(id: string): Promise<TimerManagementDetailDTO[]> {
    return await this.repo
      .find({ where: { TimerManagementID: id } })
      .then((datas) =>
        datas.map((e) => TimerManagementDetailDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: TimerManagementDetailDTO,
  ): Promise<TimerManagementDetailDTO> {
    return await this.repo
      .save(TimerManagementDetailDTO.toEntity(dto))
      .then((e) => TimerManagementDetailDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: TimerManagementDetailDTO,
  ): Promise<TimerManagementDetailDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = TimerManagementDetailDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<TimerManagementDetailDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = TimerManagementDetailDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
