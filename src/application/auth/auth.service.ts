import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserService } from 'src/domain/services/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ReturnLoginDto } from './dto/returnLogin.dto';
import { ReturnUserDto } from '../dtos/user/returnUser.dto';
import { LoginPayloadDto } from './dto/loginPayload.dto';

@Injectable()
export class AuthService {

    private readonly logger = new Logger(AuthService.name);

    constructor (
        private readonly userService: UserService,
        private jwtService: JwtService
    ) { }

    async login(loginDto: LoginDto): Promise<ReturnLoginDto> {
        this.logger.log("Starting login Method.");
        const user: UserEntity = await this.userService.findByEmail(loginDto.email);
        const isMatch = await compare(loginDto.password, user?.password);

        if(!user || !isMatch) {
            throw new NotFoundException('Email or password invalid.');
        }

        return {
            accessToken: this.jwtService.sign({ ...new LoginPayloadDto(user) }),
            user: new ReturnUserDto(user)
        };
    }
}
