import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from './pagination.dto';

export class FilterDto extends PaginationDto {
  @IsOptional()
  @IsString()
  email?: string;
}
