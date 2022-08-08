import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModemImeriRecords } from 'src/model/ExternalUnits/modemImeriRecords.entity';
import { Repository } from 'typeorm';
import { ModemImeiRecordsDTO } from './modemImeiRecords.dto';



@Injectable()
export class ModemImeiService {
  constructor(
    @InjectRepository(ModemImeriRecords)
    private readonly repo: Repository<ModemImeriRecords>,
  ) {}

  //get all devices locations
  public async getAllDevicesLocations(): Promise<ModemImeiRecordsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => ModemImeiRecordsDTO.fromEntity(e)));
  }

  public async getOneDeviceLocation(id: string): Promise<ModemImeiRecordsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => ModemImeiRecordsDTO.fromEntity(e));
  }

  // save new device
  public async create(dto: ModemImeiRecordsDTO): Promise<ModemImeiRecordsDTO> {
    return await this.repo
      .save(ModemImeiRecordsDTO.toEntity(dto))
      .then((e) => ModemImeiRecordsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: ModemImeiRecordsDTO,
  ): Promise<ModemImeiRecordsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = ModemImeiRecordsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<ModemImeiRecordsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = ModemImeiRecordsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
