import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getName(): string {
    return 'My name is Hirava';
  }
}
