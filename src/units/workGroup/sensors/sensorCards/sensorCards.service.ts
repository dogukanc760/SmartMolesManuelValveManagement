import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorCards } from 'src/model/WorkGroup/Sensors/sensorCards.entity';
import { Repository } from 'typeorm';
import { SensorCardsDTO } from './sensorCards.dto';






@Injectable()
export class SensorCardsService {
  constructor(
    @InjectRepository(SensorCards)
    private readonly repo: Repository<SensorCards>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<SensorCardsDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => SensorCardsDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<SensorCardsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => SensorCardsDTO.fromEntity(e));
  }

  public async getByWorkGroup(id: string): Promise<SensorCardsDTO[]> {
    return await this.repo
      .find({ where: { WorkGroupID: id } })
      .then((datas) =>
        datas.map((e) => SensorCardsDTO.fromEntity(e)),
      );
  }

  // save new device
  public async create(
    dto: SensorCardsDTO,
  ): Promise<SensorCardsDTO> {
    return await this.repo
      .save(SensorCardsDTO.toEntity(dto))
      .then((e) => SensorCardsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: SensorCardsDTO,
  ): Promise<SensorCardsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = SensorCardsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<SensorCardsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = SensorCardsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
