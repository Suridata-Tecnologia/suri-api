import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserService } from 'src/domain/services/user.service';
import { CreateUserDto } from '../dtos/user/createUser.dto';
import { ReturnUserDto } from '../dtos/user/returnUser.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { };

    @Get()
    async getAllUsers(): Promise<ReturnUserDto[]> {
        return (await this.userService.listAll()).map(
            (userEntity) => new ReturnUserDto(userEntity),
        );
    }

    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<ReturnUserDto> {
        const userEntity = await this.userService.store(createUser);
        return new ReturnUserDto(userEntity);
    }
}
