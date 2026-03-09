import { IsEmail, IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { UserRole } from 'src/libs/common/enums';

export class CreateUserDto {
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @Length(6, 100)
  password: string;

  @IsString({ message: 'Full name must be a string' })
  fullName: string;

  @IsOptional()
  @IsString({ message: 'Phone must be a string' })
  @Length(0, 15)
  phone?: string;

  @IsOptional()
  @IsEnum(UserRole, { message: 'Invalid role' })
  role?: UserRole;
}
