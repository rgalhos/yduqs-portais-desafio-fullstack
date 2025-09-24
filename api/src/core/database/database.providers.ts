import type { ModelCtor } from 'sequelize-typescript';

export const modelProviders: Array<{ provide: string; useValue: ModelCtor }> =
  [];
