import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LanguageEntity } from 'src/domain/entities/language.entity';
import { LanguageService } from 'src/domain/services/language.service';
import { CreateLanguageDto } from '../dtos/language/createLanguage.dto';

@Controller('language')
export class LanguageController {

    constructor(private readonly languageService: LanguageService) { };

    @Get()
    async getAllLanguages(): Promise<LanguageEntity[]> {
        return await this.languageService.listAll();
    }

    @UsePipes(ValidationPipe)
    @Post()
    async createLanguage(@Body() createLanguage: CreateLanguageDto): Promise<LanguageEntity> {
        return await this.languageService.store(createLanguage);
    }
}
