// src/users/users.controller.ts
import {
  Controller,
  Post,
  Get,
  Put,
  Body,
  Param,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.findUserById(id);
  }

  @Put(':id') // Define the update user endpoint
  async updateUser(
    @Param('id') id: string,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto, // Use the DTO for updating user
  ): Promise<User> {
    return this.usersService.updateUser(id, updateUserDto); // Call the updateUser method from the service
  }

  @Delete(':id') // Define the delete user endpoint
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUser(id); // Call the deleteUser method from the service
  }
}
