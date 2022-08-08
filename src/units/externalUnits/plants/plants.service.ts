import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plants } from 'src/model/ExternalUnits/plants.entity';
import { Repository } from 'typeorm';
import { PlantsDTO } from './plants.dto';


@Injectable()
export class PlantService {
  constructor(
    @InjectRepository(Plants)
    private readonly repo: Repository<Plants>,
  ) {}

  //get all devices locations
  public async getAllDevicesLocations(): Promise<PlantsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => PlantsDTO.fromEntity(e)));
  }

  public async getOneDeviceLocation(id: string): Promise<PlantsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => PlantsDTO.fromEntity(e));
  }

  // save new device
  public async create(dto: PlantsDTO): Promise<PlantsDTO> {
    return await this.repo
      .save(PlantsDTO.toEntity(dto))
      .then((e) => PlantsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: PlantsDTO,
  ): Promise<PlantsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = PlantsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<PlantsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = PlantsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
