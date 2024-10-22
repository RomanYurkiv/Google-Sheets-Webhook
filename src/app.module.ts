import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/database';
import { RecordModule } from './records/record.module';
import { MailModule } from './mail/mail.module';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { configFile } from './common/configs/config';

@Module({
  imports: [
    DatabaseModule,
    RecordModule,
    MailModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configFile],
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
