import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApplicantController } from './applicant.controller';
import { ApplicantService } from './applicant.service';
import { ApplicantRepository } from './applicant.repository';
import { ApplicantModel } from './applicant.model';

@Module({
  imports: [SequelizeModule.forFeature([ApplicantModel])],
  providers: [ApplicantService, ApplicantRepository],
  controllers: [ApplicantController],
})
export class ApplicantModule {}
