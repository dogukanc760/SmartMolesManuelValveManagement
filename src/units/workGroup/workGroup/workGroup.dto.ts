import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { WorkGroup } from 'src/model/WorkGroup/workGroup.entity';
import { isBoolean } from 'util';

export class WorkGroupDTO implements Readonly<WorkGroupDTO> {
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
  WorkType: string;
  @ApiProperty()
  @IsString()
  Name: string;
  @ApiProperty()
  @IsString()
  Description: string;
 
  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<WorkGroupDTO>) {
    const it = new WorkGroupDTO();
    it.contentId = dto.contentId;
    it.GatewayID = dto.GatewayID;
    it.WorkType = dto.WorkType;
    it.Name = dto.Name;
    it.Description = dto.Description;
   
    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: WorkGroup) {
    return this.from({
      contentId: entity.ContentID,
      GatewayID: entity.GatewayID,
      WorkType: entity.WorkType,
      Name: entity.Name,
      Description: entity.Description,
      
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<WorkGroupDTO>) {
    const givenData = new WorkGroup();
    givenData.GatewayID = dto.GatewayID;
    givenData.WorkType = dto.WorkType;
    givenData.Name = dto.Name;
    givenData.Description = dto.Description;
  

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
