import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UserRepository } from './repositories/user.repository';
import { UsersService } from './services/users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [UsersService, UserRepository],
  imports: [forwardRef(() => AuthModule)],
})
export class UsersModule {}
