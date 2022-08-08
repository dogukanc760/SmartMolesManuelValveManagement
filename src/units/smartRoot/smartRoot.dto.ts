import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { SmartRoot } from 'src/model/SmartRoot/smartRoot.entity';
import { isBoolean } from 'util';

export class SmartRootDTO implements Readonly<SmartRootDTO> {
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
  Name: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<SmartRootDTO>) {
    const it = new SmartRootDTO();
    it.contentId = dto.contentId;

    it.GatewayID = dto.GatewayID;
    it.Name = dto.Name;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: SmartRoot) {
    return this.from({
      contentId: entity.ContentID,
      GatewayID: entity.GatewayID,
      Name: entity.Name,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<SmartRootDTO>) {
    const givenData = new SmartRoot();
    givenData.GatewayID = dto.GatewayID;
    
    givenData.Name = dto.Name;
    
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
