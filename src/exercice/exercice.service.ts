import { Injectable } from '@nestjs/common';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';

@Injectable()
export class ExerciceService {
  create(createExerciceDto: CreateExerciceDto) {
    return 'This action adds a new exercice';
  }

  findAll() {
    return `This action returns all exercice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exercice`;
  }

  update(id: number, updateExerciceDto: UpdateExerciceDto) {
    return `This action updates a #${id} exercice`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercice`;
  }
}
