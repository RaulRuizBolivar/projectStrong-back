import { PartialType } from '@nestjs/swagger';
import { CreateExerciceDto } from './create-exercice.dto';

export class UpdateExerciceDto extends PartialType(CreateExerciceDto) {}
