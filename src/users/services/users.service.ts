import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(createUserDto: CreateUserDto) {
    try {
      const createdUser: User =
        await this.userRepository.createUser(createUserDto);
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

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
