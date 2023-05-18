import { Body, ConflictException, Controller, Get, Logger, NotFoundException, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserService } from 'src/domain/services/user.service';
import { RegisterUserDto } from '../dtos/user/registerUser.dto';
import { ReturnUserDto } from '../dtos/user/returnUser.dto';
import { ReturnUserRelationsDto } from '../dtos/user/returnUserRelations.dto';

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


    @Get('relations')
    async getAllUsersWithRelations(): Promise<ReturnUserRelationsDto[]> {
        this.logger.log("Starting getAllUsersWithRelations Method.");

        return (await this.userService.listAll()).map(
            (userEntity) => new ReturnUserRelationsDto(userEntity),
        );
    }


    @Get(':userId')
    async getUserById(@Param('userId') userId: number): Promise<ReturnUserDto> {
        try {
            this.logger.log("Starting getUserById Method.");
            
            const user = await this.userService.findById(userId);
            return new ReturnUserDto(user);
        } catch(err) {
            this.logger.error(err.message);
            throw new NotFoundException;
        }   
    }


    @Get(':userId/relations')
    async getUserByIdWithRelations(@Param('userId') userId: number): Promise<ReturnUserRelationsDto> {
        try {
            this.logger.log("Starting getUserById Method.");
            
            const user = await this.userService.findById(userId);
            return new ReturnUserRelationsDto(user);
        } catch(err) {
            this.logger.error(err.message);
            throw new NotFoundException;
        }   
    }


    @UsePipes(ValidationPipe)
    @Post()
    async registerUser(@Body() userToRegister: RegisterUserDto): Promise<ReturnUserDto> {
        try {
            this.logger.log("Starting registerUser Method.");

            const userRegistered = await this.userService.store(userToRegister);
            return new ReturnUserDto(userRegistered);
        } catch (err) {
            this.logger.error(err.message);
            throw new ConflictException;
        }
    }
}
