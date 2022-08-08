import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValveCards } from 'src/model/WorkGroup/ValveCards/valveCards.entity';
import { Repository } from 'typeorm';
import { ValveCardsDTO } from './valveCards.dto';





@Injectable()
export class ValveCardsService {
  constructor(
    @InjectRepository(ValveCards)
    private readonly repo: Repository<ValveCards>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<ValveCardsDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => ValveCardsDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<ValveCardsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => ValveCardsDTO.fromEntity(e));
  }

  public async getByWorkGroup(id: string): Promise<ValveCardsDTO[]> {
    return await this.repo
      .find({ where: { WorkGroupID: id } })
      .then((datas) =>
        datas.map((e) => ValveCardsDTO.fromEntity(e)),
      );
  }

  public async getBySensorCard(id: string): Promise<ValveCardsDTO[]> {
    return await this.repo
    .find({ where: { SensorCardID: id } })
    .then((datas) =>
      datas.map((e) => ValveCardsDTO.fromEntity(e)),
    );
  }

  public async getByTimerManagement(type: string): Promise<ValveCardsDTO[]>{
    return await this.repo
    .find({ where: { TimerManagementID: type } })
    .then((datas) =>
      datas.map((e) => ValveCardsDTO.fromEntity(e)),
    );
  }


  // save new device
  public async create(
    dto: ValveCardsDTO,
  ): Promise<ValveCardsDTO> {
    return await this.repo
      .save(ValveCardsDTO.toEntity(dto))
      .then((e) => ValveCardsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: ValveCardsDTO,
  ): Promise<ValveCardsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = ValveCardsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<ValveCardsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = ValveCardsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
