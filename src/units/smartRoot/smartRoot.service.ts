import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SmartRoot } from 'src/model/SmartRoot/smartRoot.entity';
import { Repository } from 'typeorm';
import { SmartRootDTO } from './smartRoot.dto';

@Injectable()
export class SmartRootService {
  constructor(
    @InjectRepository(SmartRoot)
    private readonly repo: Repository<SmartRoot>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<SmartRootDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => SmartRootDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<SmartRootDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => SmartRootDTO.fromEntity(e));
  }

  public async getByGateway(id: string): Promise<SmartRootDTO[]> {
    return await this.repo
      .find({ where: { GatewayID: id } })
      .then((datas) => datas.map((e) => SmartRootDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: SmartRootDTO): Promise<SmartRootDTO> {
    return await this.repo
      .save(SmartRootDTO.toEntity(dto))
      .then((e) => SmartRootDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: SmartRootDTO): Promise<SmartRootDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = SmartRootDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<SmartRootDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = SmartRootDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
