import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from 'src/application/dtos/user/registerUser.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {

    private readonly logger = new Logger(UserService.name);


    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { };


    async store(createUserDto: RegisterUserDto): Promise<UserEntity> {
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
    

    async findById(id: number): Promise<UserEntity> {
            this.logger.log("Starting listById Method.");

            return await this.userRepository.findOneOrFail({
                where: { id },
                relations: { language: true } 
            }); 
    }


    async findWhereLanguageId(languageId: number): Promise<UserEntity> {
        this.logger.log("Starting findWhereLanguageId Method.");

        return await this.userRepository.findOneOrFail({
            where: { languageId },
            relations: { language: true }
        })
    }
}
