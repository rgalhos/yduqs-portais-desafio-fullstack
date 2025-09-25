import { OfferModel } from '@/modules/offer/offer.model';
import type { ModelCtor } from 'sequelize-typescript';

export const modelProviders: Array<{ provide: string; useValue: ModelCtor }> = [
  { provide: 'OFFER_MODEL', useValue: OfferModel },
];
