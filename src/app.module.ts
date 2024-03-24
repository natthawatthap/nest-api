// src/app.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import prismaConfig from '../config/prisma.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [prismaConfig],
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class AppModule {}
