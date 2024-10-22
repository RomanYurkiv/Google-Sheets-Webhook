import { Injectable } from '@nestjs/common';
import { RecordRepository } from './record.repository';
import { RecordEntity } from './record.entity';
import { CreateRecordDto } from './dto/create-record.dto';
import {QueryRecordDto} from "./dto/query-record.dto";

@Injectable()
export class RecordService {
  constructor(private readonly recordRepository: RecordRepository) {}

  async create(createRecordDto: CreateRecordDto) {
    const record: RecordEntity = new RecordEntity({ ...createRecordDto });
    return await this.recordRepository.create(record);
  }

  async findOne(id: string): Promise<RecordEntity> {
    return this.recordRepository.findOne({ where: { id } });
  }

  async findAll(query: QueryRecordDto): Promise<[RecordEntity[], number]> {
    return this.recordRepository.findAndCount(
      {},
      query.page,
      query.pageSize,
      {
        created_at: 'DESC',
      },
      [],
    );
  }

  async getRecordCount(): Promise<number> {
    return this.recordRepository.count();
  }
}
