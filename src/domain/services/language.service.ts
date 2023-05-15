import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LanguageEntity } from '../entities/language.entity';
import { Repository } from 'typeorm';
import { CreateLanguageDto } from 'src/application/dtos/language/createLanguage.dto';

@Injectable()
export class LanguageService {

    constructor(
        @InjectRepository(LanguageEntity)
        private readonly languageRepository: Repository<LanguageEntity>
    ) { };

    async store(createLanguageDto: CreateLanguageDto): Promise<LanguageEntity> {
        return await this.languageRepository.save(createLanguageDto);
    }

    async listAll(): Promise<LanguageEntity[]> {
        return await this.languageRepository.find({ relations: { users: true }});
    }
}
