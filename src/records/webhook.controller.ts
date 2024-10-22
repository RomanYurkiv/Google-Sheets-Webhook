import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { RecordService } from './record.service';
import {MailService} from "../mail/mail.service";
import {GoogleSheetsService} from "./google-sheets.service";

@Controller('webhook')
export class WebhookController {
  constructor(
    private readonly recordService: RecordService,
    private readonly mailService: MailService,
    private readonly googleSheetsService: GoogleSheetsService,

  ) {}
  @Post('google-sheet')
  async handleGoogleSheetWebhook(@Body() data: any) {
    const { rowData } = data;

    const emails = await this.googleSheetsService.getViewersAndEditors();

    await this.recordService.create({ record: rowData[0] });

    const recordCount = await this.recordService.getRecordCount();

    if (recordCount % 10 === 0) {
      const last10Records = await this.recordService.findAll({page: 1, pageSize: 10});
      const content = last10Records[0].map(record => record.record).join('\n');
      for (const email of emails) {
        try {
          await this.mailService.sendEmail(email, content);
        } catch (error) {
          console.error(`Failed to send email to ${email}:`, error.message);
        }
      }
    }

    return { message: 'Webhook received and processed' };
  }
  }