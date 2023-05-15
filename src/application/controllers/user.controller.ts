import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserService } from 'src/domain/services/user.service';
import { CreateUserDto } from '../dtos/user/createUser.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { };

    @Get()
    async getAllUsers(): Promise<UserEntity[]> {
        return await this.userService.listAll();
    }

    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
        return await this.userService.store(createUser);
    }
}
