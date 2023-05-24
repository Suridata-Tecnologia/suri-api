import { ReturnUserDto } from "src/application/dtos/user/returnUser.dto";

export class ReturnLoginDto {
    user: ReturnUserDto;
    accessToken: string;
}