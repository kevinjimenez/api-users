import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Roles } from 'src/auth/enums/roles.enum';
import { FilterDto } from 'src/common/dto/filter.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../services/users.service';
import { GetUser } from './../../auth/decorators/get-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Auth(Roles.ADMIN)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Auth(Roles.ADMIN, Roles.STANDART, Roles.GUEST)
  findAll() {
    return this.usersService.findAll();
  }

  @Get('search')
  @Auth(Roles.ADMIN, Roles.STANDART)
  findBy(@GetUser() user: User, @Query() filter: FilterDto) {
    const { email: userEmail, role } = user;
    const { email } = filter;
    if (role === Roles.ADMIN) {
      return this.usersService.findOneBy({ where: { email } });
    }
    if (role === Roles.STANDART && userEmail === email) {
      return this.usersService.findOneBy({ where: { email } });
    }

    throw new ForbiddenException(`User ${user.name} need a valid role`);
  }

  @Patch(':id')
  @Auth(Roles.ADMIN, Roles.STANDART)
  update(
    @GetUser() user: User,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const { id: userId, role } = user;

    if (role === Roles.ADMIN) {
      return this.usersService.update(id, updateUserDto);
    }
    if (role === Roles.STANDART && id === userId) {
      return this.usersService.update(id, updateUserDto);
    }

    throw new ForbiddenException(`User ${user.name} need a valid role`);
  }

  @Delete(':id')
  @Auth(Roles.ADMIN)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.remove(id);
  }
}
