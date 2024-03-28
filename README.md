<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# User API

1. Clonar proyecto
2. ```npm install```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
docker-compose up -d
```
6. Se debe ejecutar la migracion en la base de datos
```
 npm run migrate -- <nombre_migracion>
```
7. Ejecutar SEED
```
http://localhost:3000/api/seed
```
8. Levantar: ```npm run start:dev```

9. Usuarios ccredenciales
```
// ADMIN
{
  "email": "test1@google.com",
  "password": "Abc123"
}
```
```
// GUEST
{
  "email": "test2@google.com",
  "password": "Abc123"
}
```
```
// STANDART
{
  "email": "test3@google.com",
  "password": "Abc123"
}
```
