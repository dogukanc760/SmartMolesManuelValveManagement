import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean, IsNumber } from 'class-validator';
import { SensorCalibrationLog } from 'src/model/WorkGroup/Sensors/sensorCalibrationLog.entity';
import { SensorCardLogs } from 'src/model/WorkGroup/Sensors/sensorCardLogs.entity';
import { SensorCards } from 'src/model/WorkGroup/Sensors/sensorCards.entity';


export class SensorCardsDTO
  implements Readonly<SensorCardsDTO>
{
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
  WorkGroupID: string;
  @ApiProperty()
  @IsString()
  Name: string;
  @ApiProperty()
  @IsNumber()
  ConnectPeriodWhenStop: number;
  @ApiProperty()
  @IsNumber()
  ConnectPeriodWhenWork: number;
  @ApiProperty()
  @IsString()
  IrrigationTypes: string;
  @ApiProperty()
  @IsString()
  DripperRanges: string;
  @ApiProperty()
  @IsString()
  SensorType: string;
  @ApiProperty()
  @IsString()
  PlantType: string;
  @ApiProperty()
  @IsString()
  SensorLocation: string;

 
 

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<SensorCardsDTO>) {
    const it = new SensorCardsDTO();
    it.contentId = dto.contentId;

    it.WorkGroupID = dto.WorkGroupID;
    it.Name = dto.Name;
    it.ConnectPeriodWhenStop = dto.ConnectPeriodWhenStop;
    it.ConnectPeriodWhenWork = dto.ConnectPeriodWhenWork;
    it.IrrigationTypes = dto.IrrigationTypes;
    it.DripperRanges = dto.DripperRanges;
    it.SensorType = dto.SensorType;
    it.PlantType = dto.PlantType;
    it.SensorLocation = dto.SensorLocation;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: SensorCards) {
    return this.from({
      contentId: entity.ContentID,
      WorkGroupID: entity.WorkGroupID,
      Name: entity.Name,
      ConnectPeriodWhenStop: entity.ConnectPeriodWhenStop,
      ConnectPeriodWhenWork: entity.ConnectPeriodWhenWork,
      IrrigationTypes: entity.IrrigationTypes,
      DripperRanges: entity.DripperRanges,
      SensorType: entity.SensorType,
      PlantType: entity.PlantType,
      SensorLocation: entity.SensorLocation,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<SensorCardsDTO>) {
    const givenData = new SensorCards();
    givenData.WorkGroupID = dto.WorkGroupID;
    givenData.Name = dto.Name;
    givenData.ConnectPeriodWhenWork = dto.ConnectPeriodWhenWork;
    givenData.ConnectPeriodWhenStop = dto.ConnectPeriodWhenStop;
    givenData.IrrigationTypes = dto.IrrigationTypes;
    givenData.DripperRanges = dto.DripperRanges;
    givenData.SensorType = dto.SensorType;
    givenData.PlantType = dto.PlantType;
    givenData.SensorLocation = dto.SensorLocation;
  
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
