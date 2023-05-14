import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/application/dtos/user/createUser.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { };

    async store(createUserDto: CreateUserDto): Promise<UserEntity> {

        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltOrRounds);
        
        return await this.userRepository.save({
            ...createUserDto,
            password: passwordHashed
        });
    }

    async listAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }
}
