import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { OfferModule } from './modules/offer/offer.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, OfferModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
