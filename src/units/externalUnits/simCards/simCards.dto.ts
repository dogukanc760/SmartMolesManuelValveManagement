import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

import { SimCards } from 'src/model/ExternalUnits/simCards.entity';


export class SimCardsDTO implements Readonly<SimCardsDTO> {
  @ApiProperty({ required: false })
  contentId: string;
  @ApiProperty({ required: false })
  createdAt: Date;
  @ApiProperty({ required: false })
  updatedAt: Date;
  @ApiProperty({ required: false })
  lastChangedDateTime: Date;
  @ApiProperty()
  @IsString()
  GatewayID: string;
  @ApiProperty()
  @IsString()
  UserID: string;
  @ApiProperty()
  @IsString()
  SerialNumber: string;
  @ApiProperty()
  @IsString()
  StaticIP: string;
  @ApiProperty()
  @IsString()
  Port: string;
  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<SimCardsDTO>) {
    const it = new SimCardsDTO();
    it.contentId = dto.contentId;
    it.GatewayID = dto.GatewayID;
    it.UserID = dto.UserID;
    it.SerialNumber = dto.SerialNumber;
    it.StaticIP = dto.StaticIP;
    it.Port = dto.Port;
    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: SimCards) {
    return this.from({
      contentId: entity.ContentID,
      GatewayID: entity.GatewayID,
      UserID: entity.UserID,
      SerialNumber: entity.SerialNumber,
      StaticIP: entity.StaticIP,
      Port : entity.Port,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<SimCardsDTO>) {
    const givenData = new SimCards();
    givenData.GatewayID = dto.GatewayID;
    givenData.UserID = dto.UserID;
    givenData.Port = dto.Port;
    givenData.SerialNumber = dto.SerialNumber;
    givenData.StaticIP = dto.StaticIP;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
