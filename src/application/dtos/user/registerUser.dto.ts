import { IsDateString, IsEmail, IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterUserDto {
   
    @IsString()
    @MinLength(5)
    name: string;

    @IsEmail()
    email: string;

    @IsDateString()
    @IsOptional()
    emailSendAt: Date;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
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