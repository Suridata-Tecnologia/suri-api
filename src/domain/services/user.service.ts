import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/application/dtos/user/createUser.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {

    private readonly logger = new Logger(UserService.name);

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { };

    async store(createUserDto: CreateUserDto): Promise<UserEntity> {
        this.logger.log("Starting store Method.");

        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltOrRounds);
        
        return await this.userRepository.save({
            ...createUserDto,
            password: passwordHashed
        });
    }

    async listAll(): Promise<UserEntity[]> {
        this.logger.log("Starting listAll Method.");
        return await this.userRepository.find({ relations: { language: true }});
    }
}
