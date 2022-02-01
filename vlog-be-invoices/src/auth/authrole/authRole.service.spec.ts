import { Test, TestingModule } from '@nestjs/testing';
import { AuthRoleService } from './authRole.service';

describe('AuthService', () => {
  let service: AuthRoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthRoleService],
    }).compile();

    service = module.get<AuthRoleService>(AuthRoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
