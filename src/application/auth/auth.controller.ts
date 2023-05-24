import { Body, Controller, Logger, NotFoundException, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { ReturnUserDto } from '../dtos/user/returnUser.dto';
import { AuthService } from './auth.service';
import { ReturnLoginDto } from './dto/returnLogin.dto';

@Controller('auth')
export class AuthController {

    private readonly logger = new Logger(AuthController.name);

    constructor(
        private readonly authService: AuthService
    ) { }

    @UsePipes(ValidationPipe)
    @Post()
    async login(@Body() loginDto: LoginDto): Promise<ReturnLoginDto> {
        this.logger.log("Starting login Method.");
        return await this.authService.login(loginDto);
    } 
}
