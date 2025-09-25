import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ECourseModality } from './enums/course-modality.enum';
import { ECourseShift } from './enums/course-shift.enum';
import { Type } from 'class-transformer';

export class InstallmentDto {
  @IsNumber()
  @ApiProperty({ description: 'Number of months', type: 'number' })
  months: number;

  @IsNumber()
  @ApiProperty({ description: 'Value of each installment', type: 'number' })
  value: number;
}

export class OfferDto {
  @IsNumber()
  @ApiProperty({ description: 'Offer ID' })
  id: number;

  @IsEnum(ECourseModality)
  @ApiProperty({ description: 'Course modality', enum: ECourseModality })
  modality: ECourseModality;

  @IsOptional()
  @IsEnum(ECourseShift)
  @ApiProperty({ description: 'Course shift', enum: ECourseShift })
  shift?: ECourseShift;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: 'Offer original price', type: 'number' })
  originalPrice?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: 'Current price of the offer', type: 'number' })
  currentPrice?: number;

  @IsOptional()
  @IsArray()
  @Type(() => InstallmentDto)
  @ApiProperty({ description: 'Installment plans', type: [InstallmentDto] })
  installments?: InstallmentDto[];

  @IsOptional()
  @IsString()
  details?: string;

  @IsString()
  @ApiProperty({ description: 'University unit', type: 'string' })
  unit: string;

  @IsString()
  @ApiProperty({ description: 'University unit address', type: 'string' })
  address: string;

  @IsBoolean()
  @ApiProperty({ description: 'Wether the offer is active', type: 'string' })
  active: boolean;
}

export class GetAllOffersOutDto {
  @IsArray()
  @Type(() => OfferDto)
  @ApiProperty({ description: 'List of active offers', type: [OfferDto] })
  items: OfferDto[];
}
