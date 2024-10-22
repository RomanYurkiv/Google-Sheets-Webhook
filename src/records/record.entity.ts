import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/database';

@Entity('records')
export class RecordEntity extends BaseEntity<RecordEntity> {
  @Column()
  record: string;
}
