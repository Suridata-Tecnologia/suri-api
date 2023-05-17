import { Body, Controller, Get, HttpException, HttpStatus, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserService } from 'src/domain/services/user.service';
import { CreateUserDto } from '../dtos/user/createUser.dto';
import { ReturnUserDto } from '../dtos/user/returnUser.dto';

@Controller('user')
export class UserController {

    private readonly logger = new Logger(UserController.name);

    constructor(private readonly userService: UserService) { };

    @Get()
    async getAllUsers(): Promise<ReturnUserDto[]> {
        this.logger.log("Starting getAllUsers Method.");

        return (await this.userService.listAll()).map(
            (userEntity) => new ReturnUserDto(userEntity),
        );
    }

    @UsePipes(ValidationPipe)
    @Post()
    async registerUser(@Body() createUser: CreateUserDto): Promise<ReturnUserDto> {
        try {
            this.logger.log("Starting registerUser Method.");

            const userEntity = await this.userService.store(createUser);
            return new ReturnUserDto(userEntity);
        } catch (err) {
            this.logger.error(err.message);
            throw new HttpException(err.message, HttpStatus.CONFLICT);
        }
    }
}
