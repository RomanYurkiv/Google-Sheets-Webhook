import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param, Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordEntity } from './record.entity';
import { QueryRecordDto } from './dto/query-record.dto';
import {GoogleSheetsService} from "./google-sheets.service";

@Controller('records')
export class RecordController {
  constructor(private readonly recordService: RecordService, private readonly googleSheetsService: GoogleSheetsService) {}

  @Get('all')
  async findAll(@Query() query: QueryRecordDto) {
    let [records, count] = await this.recordService.findAll(query);
    return {
      count,
      records,
    };
  }


  @Get('data')
  async getData() {
    const values = await this.googleSheetsService.getSpreadsheetValues(`'Test'!A1`);
    return {
      data: values,
    };
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async findOne(@Param('id') id: string): Promise<RecordEntity> {
    const record = await this.recordService.findOne(id);
    if (!record) {
      throw new NotFoundException('Record not found.');
    }
    return record;
  }
}
