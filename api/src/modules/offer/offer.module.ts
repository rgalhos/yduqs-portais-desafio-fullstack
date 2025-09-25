import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import { OfferRepository } from './offer.repository';
import { OfferModel } from './offer.model';

@Module({
  imports: [SequelizeModule.forFeature([OfferModel])],
  providers: [OfferService, OfferRepository],
  controllers: [OfferController],
})
export class OfferModule {}
