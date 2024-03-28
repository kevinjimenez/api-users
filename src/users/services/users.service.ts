import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
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
        password: bcrypt.hashSync(password, 10),
        role,
      };
      const createdUser: User =
        await this.userRepository.createUser(userToCreate);
      delete createdUser.createdAt;
      delete createdUser.updatedAt;
      delete createdUser.email;
      delete createdUser.password;
      return createdUser;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error creating user');
    }
  }

  public async findAll() {
    try {
      const users = await this.userRepository.getUsers();
      return users.map((user) => ({
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
      }));
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error getting users');
    }
  }

  public async findOneBy(params: { where?: Prisma.UserWhereInput }) {
    try {
      return await this.userRepository.getUserBy(params);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error getting user by params');
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
      const user = await this.userRepository.updateUser(params);
      return {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error updating user');
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
      throw new InternalServerErrorException('Error delete user');
    }
  }
}
