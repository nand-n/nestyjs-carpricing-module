import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const response = "The message to be resonded"
    return response
  }
}
