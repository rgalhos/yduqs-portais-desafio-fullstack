import { Inject } from '@nestjs/common';
import { CreateApplicantDto } from './applicant.dto';
import { ApplicantRepository } from './applicant.repository';

export class ApplicantService {
  constructor(
    @Inject() private readonly applicantRepository: ApplicantRepository,
  ) {}

  create(createApplicantDto: CreateApplicantDto) {
    return this.applicantRepository.create(createApplicantDto);
  }
}
