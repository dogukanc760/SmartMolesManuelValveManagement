import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { IrrigationTypes } from 'src/model/ExternalUnits/irrigationTypes.entity';
import { ModemImeriRecords } from 'src/model/ExternalUnits/modemImeriRecords.entity';


export class ModemImeiRecordsDTO implements Readonly<ModemImeiRecordsDTO> {
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
  ImeiNumber: string;
  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<ModemImeiRecordsDTO>) {
    const it = new ModemImeiRecordsDTO();
    it.contentId = dto.contentId;
    it.GatewayID = dto.GatewayID;
    it.UserID = dto.UserID;
    it.ImeiNumber = dto.ImeiNumber;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: ModemImeriRecords) {
    return this.from({
      contentId: entity.ContentID,
      GatewayID: entity.GatewayID,
      UserID: entity.UserID,
      ImeiNumber: entity.ImeiNumber,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<ModemImeiRecordsDTO>) {
    const givenData = new ModemImeriRecords();
    givenData.GatewayID = dto.GatewayID;
    givenData.ImeiNumber = dto.ImeiNumber;
    givenData.UserID = dto.UserID;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
