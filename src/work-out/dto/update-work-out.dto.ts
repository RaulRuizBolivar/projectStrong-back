import { PartialType } from '@nestjs/swagger';
import { CreateWorkOutDto } from './create-work-out.dto';

export class UpdateWorkOutDto extends PartialType(CreateWorkOutDto) {}
