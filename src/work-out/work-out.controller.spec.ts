import { Test, TestingModule } from '@nestjs/testing';
import { WorkOutController } from './work-out.controller';
import { WorkOutService } from './work-out.service';

describe('WorkOutController', () => {
  let controller: WorkOutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkOutController],
      providers: [WorkOutService],
    }).compile();

    controller = module.get<WorkOutController>(WorkOutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
