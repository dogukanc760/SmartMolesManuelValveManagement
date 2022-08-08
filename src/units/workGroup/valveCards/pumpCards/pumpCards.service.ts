import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TimerManagement } from 'src/model/WorkGroup/TimerManagement/timerManagement.entity';
import { PumpCards } from 'src/model/WorkGroup/ValveCards/pumpCards.entity';
import { Repository } from 'typeorm';
import { PumpCardsDTO } from './pumpCards.dto';

@Injectable()
export class PumpCardsService {
  constructor(
    @InjectRepository(PumpCards)
    private readonly repo: Repository<PumpCards>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<PumpCardsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => PumpCardsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<PumpCardsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => PumpCardsDTO.fromEntity(e));
  }

  public async getByValve(id: string): Promise<PumpCardsDTO[]> {
    return await this.repo
      .find({ where: { ValveID: id } })
      .then((datas) => datas.map((e) => PumpCardsDTO.fromEntity(e)));
  }

  public async getBySensorCard(id: string): Promise<PumpCardsDTO[]> {
    return await this.repo
      .find({ where: { SensorCardID: id } })
      .then((datas) => datas.map((e) => PumpCardsDTO.fromEntity(e)));
  }

  public async getByPumpManagementType(type: string): Promise<PumpCardsDTO[]> {
    return await this.repo
      .find({ where: { PumpManagementType: type } })
      .then((datas) => datas.map((e) => PumpCardsDTO.fromEntity(e)));
  }

  public async getByValveManagementType(type: string): Promise<PumpCardsDTO[]> {
    return await this.repo
      .find({ where: { ValveManagementType: type } })
      .then((datas) => datas.map((e) => PumpCardsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: PumpCardsDTO): Promise<PumpCardsDTO> {
    return await this.repo
      .save(PumpCardsDTO.toEntity(dto))
      .then((e) => PumpCardsDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: PumpCardsDTO): Promise<PumpCardsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = PumpCardsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<PumpCardsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = PumpCardsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
