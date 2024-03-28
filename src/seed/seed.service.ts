import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserRepository } from './../users/repositories/user.repository';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly userRepository: UserRepository) {}

  async runSeed() {
    await this.deleteTables();

    await this.insertUsers();
    return `seed execute`;
  }

  private async deleteTables() {
    await this.userRepository.deleteAll();
  }

  private async insertUsers(): Promise<Prisma.BatchPayload> {
    const seedUsers = initialData.users;
    return await this.userRepository.createMany(seedUsers);
  }
}
