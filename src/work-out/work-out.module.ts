import { Module } from '@nestjs/common';
import { WorkOutService } from './work-out.service';
import { WorkOutController } from './work-out.controller';

@Module({
  controllers: [WorkOutController],
  providers: [WorkOutService],
})
export class WorkOutModule {}
