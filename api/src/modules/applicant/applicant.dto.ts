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
  fullName: string;

  @IsString()
  @Length(11)
  cpf: string;

  @IsDateString()
  birthDate: string;

  @IsString()
  @Length(10, 11)
  phone: string;

  @IsEmail()
  email: string;

  @IsNumber()
  graduationYear: number;

  @IsBoolean()
  whatsappOptIn: boolean;

  @IsNumber()
  offerId: number;
}
