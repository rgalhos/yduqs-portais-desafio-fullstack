import { modelProviders } from '@/core/database/database.providers';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.getOrThrow('DATABASE_HOST'),
        port: parseInt(configService.getOrThrow('DATABASE_PORT')),
        username: configService.getOrThrow('DATABASE_USER'),
        password: configService.getOrThrow('DATABASE_PASSWORD'),
        database: configService.getOrThrow('DATABASE_DB'),
        models: modelProviders.map((model) => model.useValue),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
