import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
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

  private async insertUsers(): Promise<User> {
    const seedUser = initialData.user;
    const userDB = await this.userRepository.createUser(seedUser);
    return userDB;
  }
}
