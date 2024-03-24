// src/users/dto/update-user.dto.ts
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional() // This field is optional
  @IsNotEmpty()
  @IsString()
  name?: string;

  // Add more fields that can be updated
}
