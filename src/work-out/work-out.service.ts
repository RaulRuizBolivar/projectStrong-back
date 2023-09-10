import { Injectable } from '@nestjs/common';
import { CreateWorkOutDto } from './dto/create-work-out.dto';
import { UpdateWorkOutDto } from './dto/update-work-out.dto';

@Injectable()
export class WorkOutService {
  create(createWorkOutDto: CreateWorkOutDto) {
    return 'This action adds a new workOut';
  }

  findAll() {
    return `This action returns all workOut`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workOut`;
  }

  update(id: number, updateWorkOutDto: UpdateWorkOutDto) {
    return `This action updates a #${id} workOut`;
  }

  remove(id: number) {
    return `This action removes a #${id} workOut`;
  }
}
