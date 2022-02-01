import { Test, TestingModule } from '@nestjs/testing';
import { VlogResolver } from './vlog.resolver';
import { VlogService } from './vlog.service';

describe('VlogResolver', () => {
  let resolver: VlogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VlogResolver, VlogService],
    }).compile();

    resolver = module.get<VlogResolver>(VlogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
