import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserRepository {
  constructor(private databaseService: DatabaseService) {}

  createUser(payload: Prisma.UserCreateInput): Promise<User> {
    return this.databaseService.user.create({
      data: payload,
    });
  }

  // params: {
  //   skip?: number;
  //   take?: number;
  //   where?: Prisma.UserWhereInput;
  //   orderBy?: Prisma.UserOrderByWithRelationInput;
  // }

  async getUsers(): Promise<User[]> {
    // const { skip, take, where, orderBy } = params;
    return this.databaseService.user.findMany({
      take: 3, // limit
      skip: 0, // page
    });
  }
}
