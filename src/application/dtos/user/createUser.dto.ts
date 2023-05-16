import { IsDateString, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
   
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsDateString()
    @IsOptional()
    emailSendAt: Date;

    @IsStrongPassword()
    password: string;

    @IsInt()
    access: number;

    @IsInt()
    @IsOptional()
    company: number;

    @IsInt()
    @IsOptional()
    viewDash: number;

    @IsInt()
    @IsOptional()
    seeMargin: number;

    @IsString()
    @IsOptional()
    rememberToken: string;

    @IsInt()
    @IsOptional()
    inactive: number;

    @IsDateString()
    @IsOptional()
    emailVerifiedAt: Date;

    @IsInt()
    @IsOptional()
    receivedEmail: number;

    @IsInt()
    @IsOptional()
    isSuridataUser: number;

    @IsInt()
    @IsOptional()
    isBusinessUser: number;

    @IsString()
    @IsOptional()
    statusPolicy: string;

    @IsString()
    @IsOptional()
    responseDatePolicy: string;

    @IsString()
    @IsOptional()
    hasSuriwalletAccess: string;

    @IsString()
    @IsOptional()
    birthday: string;

    @IsInt()
    @IsOptional()
    languageId: number;
    
}