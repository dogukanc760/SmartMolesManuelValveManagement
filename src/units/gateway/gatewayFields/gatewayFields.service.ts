import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GatewayFields } from 'src/model/Gateway/gatewayFields.entity';
import { Repository } from 'typeorm';
import { GatewayFieldsDTO } from './gatewayFields.dto';

@Injectable()
export class GatewayFieldsService {
  constructor(
    @InjectRepository(GatewayFields)
    private readonly repo: Repository<GatewayFields>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<GatewayFieldsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => GatewayFieldsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<GatewayFieldsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => GatewayFieldsDTO.fromEntity(e));
  }

  public async getByGateway(id: string): Promise<GatewayFieldsDTO[]> {
    return await this.repo
      .find({ where: { GatewayID: id } })
      .then((datas) => datas.map((e) => GatewayFieldsDTO.fromEntity(e)));
  }

  
  public async getByName(name: string): Promise<GatewayFieldsDTO[]> {
    return await this.repo
      .createQueryBuilder('gateway')
      .where('gateway.Name like :name', { name: `%${name}%` })
      .getMany()
      .then((datas) => datas.map((e) => GatewayFieldsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: GatewayFieldsDTO): Promise<GatewayFieldsDTO> {
    return await this.repo
      .save(GatewayFieldsDTO.toEntity(dto))
      .then((e) => GatewayFieldsDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: GatewayFieldsDTO): Promise<GatewayFieldsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = GatewayFieldsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<GatewayFieldsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = GatewayFieldsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
