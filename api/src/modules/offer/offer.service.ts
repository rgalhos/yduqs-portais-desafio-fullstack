import { Inject } from '@nestjs/common';
import { OfferRepository } from './offer.repository';
import { GetAllOffersOutDto } from './offer.dto';

export class OfferService {
  constructor(@Inject() private readonly offerRepository: OfferRepository) {}

  async getAllActive(): Promise<GetAllOffersOutDto> {
    const activeOffers = await this.offerRepository.findAll({
      where: { active: true },
    });

    return { items: activeOffers };
  }
}
