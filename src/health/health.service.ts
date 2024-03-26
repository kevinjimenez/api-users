import { Injectable } from '@nestjs/common';
import { Health } from './interfaces/health.interface';

@Injectable()
export class HealthService {
  public checkStatus(): Health {
    return {
      environment: process.env.NODE_ENV || 'local',
      message: 'api-users is up and running',
      port: process.env.PORT || '3000',
    };
  }
}
