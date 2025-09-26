import { InjectModel } from '@nestjs/sequelize';
import { ApplicantModel } from './applicant.model';
import { InferAttributes } from 'sequelize';

export class ApplicantRepository {
  constructor(
    @InjectModel(ApplicantModel)
    private readonly applicantModel: typeof ApplicantModel,
  ) {}

  create(
    applicant: Omit<
      InferAttributes<ApplicantModel>,
      'id' | 'noInstallments' | 'installmentValue'
    >,
  ) {
    return this.applicantModel.create(applicant);
  }
}
