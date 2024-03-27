import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { DatabaseService } from './../../database/database.service';

@Injectable()
export class UserRepository {
  constructor(private databaseService: DatabaseService) {}

  public createUser(payload: Prisma.UserCreateInput): Promise<User> {
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

  public getUsers(): Promise<User[]> {
    return this.databaseService.user.findMany({
      // where,
      // take: 3, // limit
      // skip: 0, // page
    });
  }

  public getUserBy(params: { where?: Prisma.UserWhereInput }): Promise<User> {
    const { where } = params;
    return this.databaseService.user.findFirst({
      where,
    });
  }

  public updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.databaseService.user.update({ where, data });
  }

  public deleteUser(params: {
    where: Prisma.UserWhereUniqueInput;
  }): Promise<User> {
    const { where } = params;
    return this.databaseService.user.delete({ where });
  }
}
