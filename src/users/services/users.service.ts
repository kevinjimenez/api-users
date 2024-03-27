import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(createUserDto: CreateUserDto) {
    try {
      const { name, lastname, email, password, role } = createUserDto;
      const userToCreate: Prisma.UserCreateInput = {
        name,
        lastname,
        email,
        password,
        role,
      };
      const createdUser: User =
        await this.userRepository.createUser(userToCreate);
      return createdUser;
    } catch (error) {
      console.log(error);
      // return HandleExceptions.DB(error);
    }
  }

  public async findAll() {
    try {
      return await this.userRepository.getUsers();
    } catch (error) {
      console.log(error);
      // return HandleExceptions.DB(error);
    }
  }

  public async findOneBy(params: { where?: Prisma.UserWhereInput }) {
    try {
      return await this.userRepository.getUserBy(params);
    } catch (error) {
      console.log(error);
      // return HandleExceptions.DB(error);
    }
  }

  public async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const params = {
        where: {
          id,
        },
        data: updateUserDto,
      };
      return await this.userRepository.updateUser(params);
    } catch (error) {
      console.log(error);
      // return HandleExceptions.DB(error);
    }
  }

  public async remove(id: string) {
    try {
      const params = {
        where: {
          id,
        },
      };
      return await this.userRepository.deleteUser(params);
    } catch (error) {
      console.log(error);
      // return HandleExceptions.DB(error);
    }
  }
}
