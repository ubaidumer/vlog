import { CONFIG } from './config';

describe('Config', () => {
  it('should be defined', () => {
    expect(new CONFIG()).toBeDefined();
  });
});
