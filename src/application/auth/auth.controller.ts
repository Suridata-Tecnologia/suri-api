import { Body, Controller, Logger, NotFoundException, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { ReturnUserDto } from '../dtos/user/returnUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    private readonly logger = new Logger(AuthController.name);

    constructor(
        private readonly authService: AuthService
    ) { }

    @UsePipes(ValidationPipe)
    @Post()
    async login(@Body() loginDto: LoginDto): Promise<ReturnUserDto> {
        this.logger.log("Starting login Method.");
        return new ReturnUserDto(await this.authService.login(loginDto));
    } 
}
