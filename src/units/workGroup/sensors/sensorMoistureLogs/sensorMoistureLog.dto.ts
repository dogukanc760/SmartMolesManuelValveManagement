import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { SensorMoistureLog } from 'src/model/WorkGroup/Sensors/sensorMoistureLog.entity';


export class SensorMoistureLogDTO
  implements Readonly<SensorMoistureLogDTO>
{
  @ApiProperty({ required: false })
  ContentId: string;
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
  @ApiProperty()
  @IsString()
  SensorDatasAverage: string;
  @ApiProperty()
  @IsString()
  GetDataAt: Date;
 
 

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<SensorMoistureLogDTO>) {
    const it = new SensorMoistureLogDTO();
    it.ContentId = dto.ContentId;
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

  public static fromEntity(entity: SensorMoistureLog) {
    return this.from({
      ContentId: entity.ContentID,
      SensorCardID: entity.SensorCardID,
      Sensors: entity.Sensors,
      SensorDatas: entity.SensorDatas,
      GetDataAt: entity.GetDataAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      SensorDatasAverage: entity.SensorDatasAverage,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<SensorMoistureLogDTO>) {
    const givenData = new SensorMoistureLog();
    givenData.SensorCardID = dto.SensorCardID;
    givenData.Sensors = dto.Sensors;
    givenData.SensorDatas = dto.SensorDatas;
    givenData.GetDataAt = dto.GetDataAt;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    givenData.SensorDatasAverage = dto.SensorDatasAverage;
    return givenData;
  }
}
