import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkOutService } from './work-out.service';
import { CreateWorkOutDto } from './dto/create-work-out.dto';
import { UpdateWorkOutDto } from './dto/update-work-out.dto';

@Controller('work-out')
export class WorkOutController {
  constructor(private readonly workOutService: WorkOutService) {}

  @Post()
  create(@Body() createWorkOutDto: CreateWorkOutDto) {
    return this.workOutService.create(createWorkOutDto);
  }

  @Get()
  findAll() {
    return this.workOutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workOutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkOutDto: UpdateWorkOutDto) {
    return this.workOutService.update(+id, updateWorkOutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workOutService.remove(+id);
  }
}
