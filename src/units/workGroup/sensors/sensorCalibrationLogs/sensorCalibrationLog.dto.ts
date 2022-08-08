import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { SensorCalibrationLog } from 'src/model/WorkGroup/Sensors/sensorCalibrationLog.entity';


export class SensorCalibrationLogDTO
  implements Readonly<SensorCalibrationLogDTO>
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
  SensorCardID: string;
  @ApiProperty()
  @IsString()
  Sensors: string[];
  @ApiProperty()
  @IsString()
  SensorDatas: string[];
  @ApiProperty({ required: false })
  @IsString()
  SensorDatasAverage: string;
  @ApiProperty()
  @IsString()
  GetDataAt: Date;
 
 

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<SensorCalibrationLogDTO>) {
    const it = new SensorCalibrationLogDTO();
    it.contentId = dto.contentId;
    it.Sensors = dto.Sensors;
    it.SensorDatas = dto.SensorDatas;
    it.GetDataAt = dto.GetDataAt;
    it.SensorCardID = dto.SensorCardID;
    it.SensorDatasAverage = dto.SensorDatasAverage;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: SensorCalibrationLog) {
    return this.from({
      contentId: entity.ContentID,
      SensorCardID: entity.SensorCardID,
      Sensors: entity.Sensors,
      SensorDatas: entity.SensorDatas,
      GetDataAt: entity.GetDataAt,
      createdAt: entity.createdAt,
      SensorDatasAverage: entity.SensorDatasAverage,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<SensorCalibrationLogDTO>) {
    const givenData = new SensorCalibrationLog();
    givenData.SensorCardID = dto.SensorCardID;
    givenData.Sensors = dto.Sensors;
    givenData.SensorDatas = dto.SensorDatas;
    givenData.GetDataAt = dto.GetDataAt;
    givenData.SensorDatasAverage = dto.SensorDatasAverage;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
