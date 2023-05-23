import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserService } from 'src/domain/services/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {

    private readonly logger = new Logger(AuthService.name);

    constructor (
        private readonly userService: UserService
    ) { }

    async login(loginDto: LoginDto): Promise<UserEntity> {
        this.logger.log("Starting login Method.");
        const user: UserEntity = await this.userService.findByEmail(loginDto.email);
        const isMatch = await compare(loginDto.password, user?.password);

        if(!user || !isMatch) {
            throw new NotFoundException('Email or password invalid.');
        }

        return user;
    }
}
