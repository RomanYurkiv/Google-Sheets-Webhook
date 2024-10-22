import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRecordDto {
  @ApiProperty()
  @IsString()
  readonly record: string;
}
