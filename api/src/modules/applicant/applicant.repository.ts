import { InjectModel } from '@nestjs/sequelize';
import { ApplicantModel } from './applicant.model';

export class ApplicantRepository {
  constructor(
    @InjectModel(ApplicantModel)
    private readonly applicantModel: typeof ApplicantModel,
  ) {}

  create(applicant: Omit<ApplicantModel, 'id'>) {
    return this.applicantModel.create(applicant);
  }
}
