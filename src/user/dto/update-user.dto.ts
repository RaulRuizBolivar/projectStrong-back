import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty()
  _id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @MinLength(2)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @MinLength(2)
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @MinLength(2)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @MinLength(2)
  profilePicture: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @MinLength(2)
  password: string;

  @IsArray()
  workOuts: any[]; // TODO tengo que integrar las interfaces necesarias

  @IsArray()
  following: any[]; // TODO tengo que integrar las interfaces necesarias

  @IsArray()
  followers: any[]; // TODO tengo que integrar las interfaces necesarias

  @IsObject()
  userSettings: any;
}
