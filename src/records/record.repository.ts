import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from 'src/common/database';
import { EntityManager, Repository } from 'typeorm';
import { RecordEntity } from './record.entity';

@Injectable()
export class RecordRepository extends AbstractRepository<RecordEntity> {
  constructor(
    @InjectRepository(RecordEntity)
    RecordRepository: Repository<RecordEntity>,
    entityManager: EntityManager,
  ) {
    super(RecordRepository, entityManager);
  }
}
