import { IsNotEmpty, IsString } from "class-validator";

export class RegisterLanguageDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    abbreviation: string;
    
}