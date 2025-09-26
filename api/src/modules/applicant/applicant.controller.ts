import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateApplicantDto } from './applicant.dto';
import { ApplicantService } from './applicant.service';

@Controller('/applicant')
export class ApplicantController {
  constructor(@Inject() private readonly applicantService: ApplicantService) {}

  @Post()
  create(@Body() createApplicantDto: CreateApplicantDto) {
    return this.applicantService.create(createApplicantDto);
  }
}
