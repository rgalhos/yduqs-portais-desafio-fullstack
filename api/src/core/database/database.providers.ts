import { ApplicantModel } from '@/modules/applicant/applicant.model';
import { OfferModel } from '@/modules/offer/offer.model';
import type { ModelCtor } from 'sequelize-typescript';

export const modelProviders: Array<{ provide: string; useValue: ModelCtor }> = [
  { provide: 'OFFER_MODEL', useValue: OfferModel },
  { provide: 'APPLICANT_MODEL', useValue: ApplicantModel },
];
