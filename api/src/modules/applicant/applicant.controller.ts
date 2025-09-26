import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger';
import { CreateApplicantDto } from './applicant.dto';
import { ApplicantService } from './applicant.service';

@Controller('/applicant')
export class ApplicantController {
  constructor(@Inject() private readonly applicantService: ApplicantService) {}

  @Post()
  @ApiOperation({ description: 'Save user information' })
  @ApiNoContentResponse({
    description: 'User information was saved successfully',
  })
  create(@Body() createApplicantDto: CreateApplicantDto) {
    return this.applicantService.create(createApplicantDto);
  }
}
