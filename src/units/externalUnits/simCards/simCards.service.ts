import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SimCards } from 'src/model/ExternalUnits/simCards.entity';
import { Repository } from 'typeorm';
import { SimCardsDTO } from './simCards.dto';



@Injectable()
export class SimCardsService {
  constructor(
    @InjectRepository(SimCards)
    private readonly repo: Repository<SimCards>,
  ) {}

  //get all devices locations
  public async getAllDevicesLocations(): Promise<SimCardsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => SimCardsDTO.fromEntity(e)));
  }

  public async getOneDeviceLocation(id: string): Promise<SimCardsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => SimCardsDTO.fromEntity(e));
  }

  // save new device
  public async create(dto: SimCardsDTO): Promise<SimCardsDTO> {
    return await this.repo
      .save(SimCardsDTO.toEntity(dto))
      .then((e) => SimCardsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: SimCardsDTO,
  ): Promise<SimCardsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = SimCardsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<SimCardsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = SimCardsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
