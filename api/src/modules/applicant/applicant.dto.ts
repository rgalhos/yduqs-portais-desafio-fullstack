import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateApplicantDto {
  @IsString()
  @ApiProperty({ description: "User's full name" })
  fullName: string;

  @IsString()
  @Length(11)
  @ApiProperty({ description: "User's CPF" })
  cpf: string;

  @IsDateString()
  @ApiProperty({ description: "User's birth date in ISO 8601 format" })
  birthDate: string;

  @IsString()
  @Length(10, 11)
  @ApiProperty({ description: "User's phone" })
  phone: string;

  @IsEmail()
  @ApiProperty({ description: "User's email" })
  email: string;

  @IsNumber()
  @ApiProperty({ description: "User's gratuation yeat" })
  graduationYear: number;

  @IsBoolean()
  @ApiProperty({
    description: 'If the user allows to be contacted via WhatsApp',
  })
  whatsappOptIn: boolean;

  @IsNumber()
  @ApiProperty({ description: 'ID of the offer the user is registering' })
  offerId: number;
}
