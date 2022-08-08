import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkGroup } from 'src/model/WorkGroup/workGroup.entity';
import { Repository } from 'typeorm';
import { WorkGroupDTO } from './workGroup.dto';


@Injectable()
export class WorkGroupService {
  constructor(
    @InjectRepository(WorkGroup)
    private readonly repo: Repository<WorkGroup>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<WorkGroupDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => WorkGroupDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<WorkGroupDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => WorkGroupDTO.fromEntity(e));
  }

  public async getByGateway(id: string): Promise<WorkGroupDTO[]> {
    return await this.repo
      .find({ where: { GatewayID: id } })
      .then((datas) => datas.map((e) => WorkGroupDTO.fromEntity(e)));
  }

  public async getByGatewayOne(id: string): Promise<WorkGroupDTO[]> {
    return await this.repo
      .find({ where: { GatewayID: id } })
      .then((datas) => datas.map((e) => WorkGroupDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: WorkGroupDTO): Promise<WorkGroupDTO> {
    return await this.repo
      .save(WorkGroupDTO.toEntity(dto))
      .then((e) => WorkGroupDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: WorkGroupDTO): Promise<WorkGroupDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = WorkGroupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<WorkGroupDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = WorkGroupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
