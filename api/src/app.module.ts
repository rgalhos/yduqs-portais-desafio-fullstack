import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { OfferModule } from './modules/offer/offer.module';
import { ApplicantModule } from './modules/applicant/applicant.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    OfferModule,
    ApplicantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
