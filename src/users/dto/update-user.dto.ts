// src/users/dto/update-user.dto.ts
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional() // This field is optional
  @IsNotEmpty()
  @IsString()
  name?: string;

  // Add more fields that can be updated
}
