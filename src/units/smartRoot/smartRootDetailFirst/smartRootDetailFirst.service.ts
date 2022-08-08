import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SmartRootDetailFirst } from 'src/model/SmartRoot/smartRootDetailFirst.entity';
import { Repository } from 'typeorm';
import { SmartRootDetailFirstDTO } from './smartRootDetailFirst.dto';


@Injectable()
export class SmartRootDetailFirstService {
  constructor(
    @InjectRepository(SmartRootDetailFirst)
    private readonly repo: Repository<SmartRootDetailFirst>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<SmartRootDetailFirstDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => SmartRootDetailFirstDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<SmartRootDetailFirstDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => SmartRootDetailFirstDTO.fromEntity(e));
  }

  public async getBySmartRoot(id: string): Promise<SmartRootDetailFirstDTO[]> {
    return await this.repo
      .find({ where: { SmartRootID: id } })
      .then((datas) => datas.map((e) => SmartRootDetailFirstDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: SmartRootDetailFirstDTO): Promise<SmartRootDetailFirstDTO> {
    return await this.repo
      .save(SmartRootDetailFirstDTO.toEntity(dto))
      .then((e) => SmartRootDetailFirstDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: SmartRootDetailFirstDTO): Promise<SmartRootDetailFirstDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = SmartRootDetailFirstDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<SmartRootDetailFirstDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = SmartRootDetailFirstDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
