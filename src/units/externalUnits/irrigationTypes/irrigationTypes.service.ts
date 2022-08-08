import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IrrigationTypes } from 'src/model/ExternalUnits/irrigationTypes.entity';
import { Repository } from 'typeorm';
import { IrrigationTypesDTO } from './irrigationTypes.dto';


@Injectable()
export class IrrigationTypesService {
  constructor(
    @InjectRepository(IrrigationTypes)
    private readonly repo: Repository<IrrigationTypes>,
  ) {}

  //get all devices locations
  public async getAllDevicesLocations(): Promise<IrrigationTypesDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => IrrigationTypesDTO.fromEntity(e)));
  }

  public async getOneDeviceLocation(id: string): Promise<IrrigationTypesDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => IrrigationTypesDTO.fromEntity(e));
  }

  // save new device
  public async create(dto: IrrigationTypesDTO): Promise<IrrigationTypesDTO> {
    return await this.repo
      .save(IrrigationTypesDTO.toEntity(dto))
      .then((e) => IrrigationTypesDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: IrrigationTypesDTO,
  ): Promise<IrrigationTypesDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = IrrigationTypesDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<IrrigationTypesDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = IrrigationTypesDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
