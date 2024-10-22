import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database';
import { RecordEntity } from './record.entity';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { RecordRepository } from './record.repository';
import { MailModule } from '../mail/mail.module';
import {GoogleSheetsService} from "./google-sheets.service";
import {WebhookController} from "./webhook.controller";

@Module({
  imports: [DatabaseModule.forFeature([RecordEntity]), MailModule],
  controllers: [RecordController, WebhookController],
  providers: [RecordService, GoogleSheetsService, RecordRepository],
})
export class RecordModule {}
