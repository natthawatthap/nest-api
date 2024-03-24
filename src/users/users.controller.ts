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
import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBody({ type: CreateUserDto }) // Add this decorator to document the request body
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
  @ApiParam({ name: 'id', description: 'User ID' }) // Add this decorator to document the 'id' parameter
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.findUserById(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'User ID' }) // Add this decorator to document the 'id' parameter
  async updateUser(
    @Param('id') id: string,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'User ID' }) // Add this decorator to document the 'id' parameter
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUser(id);
  }
}
