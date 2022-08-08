import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceTypes } from 'src/model/ExternalUnits/deviceTypes.entity';
import { Repository } from 'typeorm';
import { DevicesTypesDTO } from './devicesTypes.dto';

@Injectable()
export class DeviceTypesService {
  constructor(
    @InjectRepository(DeviceTypes)
    private readonly repo: Repository<DeviceTypes>,
  ) {}

  //get all devices locations
  public async getAllDevs(): Promise<DevicesTypesDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => DevicesTypesDTO.fromEntity(e)));
  }

  public async getOneDeviceLocation(id: string): Promise<DevicesTypesDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => DevicesTypesDTO.fromEntity(e));
  }

  // save new device
  public async create(dto: DevicesTypesDTO): Promise<DevicesTypesDTO> {
    return await this.repo
      .save(DevicesTypesDTO.toEntity(dto))
      .then((e) => DevicesTypesDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: DevicesTypesDTO,
  ): Promise<DevicesTypesDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = DevicesTypesDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<DevicesTypesDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = DevicesTypesDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
