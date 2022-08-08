import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SmartRootDetailSecond } from 'src/model/SmartRoot/smartRootDetailSecond.entity';
import { Repository } from 'typeorm';
import { SmartRootDetailSecondDTO } from './smartRootDetailSecond.dto';


@Injectable()
export class SmartRootDetailSecondService {
  constructor(
    @InjectRepository(SmartRootDetailSecond)
    private readonly repo: Repository<SmartRootDetailSecond>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<SmartRootDetailSecondDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => SmartRootDetailSecondDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<SmartRootDetailSecondDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => SmartRootDetailSecondDTO.fromEntity(e));
  }

  public async getBySmartRoot(id: string): Promise<SmartRootDetailSecondDTO[]> {
    return await this.repo
      .find({ where: { SmartRootID: id } })
      .then((datas) => datas.map((e) => SmartRootDetailSecondDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: SmartRootDetailSecondDTO): Promise<SmartRootDetailSecondDTO> {
    return await this.repo
      .save(SmartRootDetailSecondDTO.toEntity(dto))
      .then((e) => SmartRootDetailSecondDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: SmartRootDetailSecondDTO): Promise<SmartRootDetailSecondDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = SmartRootDetailSecondDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<SmartRootDetailSecondDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = SmartRootDetailSecondDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
