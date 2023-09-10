import { Test, TestingModule } from '@nestjs/testing';
import { WorkOutService } from './work-out.service';

describe('WorkOutService', () => {
  let service: WorkOutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkOutService],
    }).compile();

    service = module.get<WorkOutService>(WorkOutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
