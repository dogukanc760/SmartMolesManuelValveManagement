import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { Repository } from 'typeorm';
import { GatewayDTO } from './gateway.dto';

@Injectable()
export class GatewayService {
  constructor(
    @InjectRepository(Gateway)
    private readonly repo: Repository<Gateway>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<GatewayDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => GatewayDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<GatewayDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => GatewayDTO.fromEntity(e));
  }

  public async getByUser(id: string): Promise<GatewayDTO[]> {
    return await this.repo
      .find({ where: { UserID: id } })
      .then((datas) => datas.map((e) => GatewayDTO.fromEntity(e)));
  }

  public async getBySales(id: string): Promise<GatewayDTO[]> {
    return await this.repo
      .find({ where: { SalesID: id } })
      .then((datas) => datas.map((e) => GatewayDTO.fromEntity(e)));
  }

  public async getByName(name: string): Promise<GatewayDTO[]> {
    return await this.repo
      .createQueryBuilder('gateway')
      .where('gateway.Name like :name', { name: `%${name}%` })
      .getMany()
      .then((datas) => datas.map((e) => GatewayDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: GatewayDTO): Promise<GatewayDTO> {
    return await this.repo
      .save(GatewayDTO.toEntity(dto))
      .then((e) => GatewayDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: GatewayDTO): Promise<GatewayDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = GatewayDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<GatewayDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = GatewayDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
