import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Repository } from 'typeorm';
import { DevicesLocationDTO } from './devicesLocation.dto';

@Injectable()
export class DevicesLocationService {
  constructor(
    @InjectRepository(DevicesLocation)
    private readonly repo: Repository<DevicesLocation>,
  ) {}

  //get all devices locations
  public async getAllDevicesLocations(): Promise<DevicesLocationDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => DevicesLocationDTO.fromEntity(e)));
  }

  public async getOneDeviceLocation(id: string): Promise<DevicesLocationDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => DevicesLocationDTO.fromEntity(e));
  }

  // save new device
  public async create(dto: DevicesLocationDTO): Promise<DevicesLocationDTO> {
    return await this.repo
    .save(DevicesLocationDTO.toEntity(dto))
    .then((e) => DevicesLocationDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: DevicesLocationDTO,
  ): Promise<DevicesLocationDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = DevicesLocationDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<DevicesLocationDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = DevicesLocationDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
