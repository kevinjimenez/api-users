import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export interface SeedUser {
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: Role;
}

interface SeedData {
  users: SeedUser[];
}

export const initialData: SeedData = {
  users: [
    {
      name: 'Test',
      lastname: 'One',
      email: 'test1@google.com',
      password: bcrypt.hashSync('Abc123', 10),
      role: Role.ADMIN,
    },
    {
      name: 'Test',
      lastname: 'Two',
      email: 'test2@google.com',
      password: bcrypt.hashSync('Abc123', 10),
      role: Role.GUEST,
    },
    {
      name: 'Test',
      lastname: 'three',
      email: 'test3@google.com',
      password: bcrypt.hashSync('Abc123', 10),
      role: Role.STANDART,
    },
  ],
};
