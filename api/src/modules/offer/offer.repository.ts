import { InjectModel } from '@nestjs/sequelize';
import { FindOptions } from 'sequelize';
import { OfferModel } from './offer.model';

export class OfferRepository {
  constructor(
    @InjectModel(OfferModel) private readonly offerModel: typeof OfferModel,
  ) {}

  findAll(options: FindOptions) {
    return this.offerModel.findAll(options);
  }
}
