import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PumpManagementTypes } from 'src/model/WorkGroup/Sensors/pumpManagementTypes.entity';
import { Repository } from 'typeorm';
import { PumpManagementTypesDTO } from './pumpManagementTypes.dto';




@Injectable()
export class PumpManagementTypesService {
  constructor(
    @InjectRepository(PumpManagementTypes)
    private readonly repo: Repository<PumpManagementTypes>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<PumpManagementTypesDTO[]> {
    return await this.repo
      .find()
      .then((datas) =>
        datas.map((e) => PumpManagementTypesDTO.fromEntity(e)),
      );
  }

  public async get(id: string): Promise<PumpManagementTypesDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => PumpManagementTypesDTO.fromEntity(e));
  }



  // save new device
  public async create(
    dto: PumpManagementTypesDTO,
  ): Promise<PumpManagementTypesDTO> {
    return await this.repo
      .save(PumpManagementTypesDTO.toEntity(dto))
      .then((e) => PumpManagementTypesDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: PumpManagementTypesDTO,
  ): Promise<PumpManagementTypesDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = PumpManagementTypesDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<PumpManagementTypesDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = PumpManagementTypesDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
