import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Plants } from 'src/model/ExternalUnits/plants.entity';


export class PlantsDTO implements Readonly<PlantsDTO> {
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
  TitleTR: string;
  @ApiProperty()
  @IsString()
  TitleEN: string;
  @ApiProperty()
  @IsString()
  RootRange: string;
  @ApiProperty()
  @IsString()
  ActiveRootRange: string;
  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<PlantsDTO>) {
    const it = new PlantsDTO();
    it.contentId = dto.contentId;
    it.TitleTR = dto.TitleTR;
    it.TitleEN = dto.TitleEN;
    it.RootRange = dto.RootRange;
    it.ActiveRootRange = dto.ActiveRootRange;
    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Plants) {
    return this.from({
      contentId: entity.ContentID,
      TitleEN: entity.TitleEN,
      TitleTR: entity.TitleTR,
      RootRange: entity.RootRange,
      ActiveRootRange: entity.ActiveRootRange,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<PlantsDTO>) {
    const givenData = new Plants();
    givenData.ActiveRootRange = dto.ActiveRootRange;
    givenData.RootRange = dto.RootRange;
    givenData.TitleEN = dto.TitleEN;
    givenData.TitleTR = dto.TitleTR;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
