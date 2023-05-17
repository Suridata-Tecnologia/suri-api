import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LanguageEntity } from '../entities/language.entity';
import { Repository } from 'typeorm';
import { CreateLanguageDto } from 'src/application/dtos/language/createLanguage.dto';

@Injectable()
export class LanguageService {

    private readonly logger = new Logger(LanguageService.name);
    
    constructor(
        @InjectRepository(LanguageEntity)
        private readonly languageRepository: Repository<LanguageEntity>
    ) { };

    async store(createLanguageDto: CreateLanguageDto): Promise<LanguageEntity> {
        this.logger.log("Starting store Method.");

        return await this.languageRepository.save(createLanguageDto);
    }

    async listAll(): Promise<LanguageEntity[]> {
        this.logger.log("Starting listAll Method.");

        return await this.languageRepository.find({ relations: { users: true }});
    }
}
