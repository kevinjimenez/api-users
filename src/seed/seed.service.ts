// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class SeedService {
//   async runSeed() {
//     await this.deleteTables();

//     await this.insertUsers();
//     return `seed execute`;
//   }

//   private async deleteTables() {
//     await this.productsService.deleteAllProducts();
//     const queryBuilder = this.userRepository.createQueryBuilder();
//     await queryBuilder.delete().where({}).execute();
//   }

//   private async insertUsers() {
//     const seedUsers = initialData.users;
//     const users: User[] = [];
//     seedUsers.forEach((user) => {
//       // user.password = bcrypt.hashSync(user.password, 10);
//       users.push(this.userRepository.create(user));
//     });

//     const usersDB = await this.userRepository.save(users);
//     return usersDB[0];
//   }
// }
