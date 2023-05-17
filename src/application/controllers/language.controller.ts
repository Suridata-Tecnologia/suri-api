import { Body, Controller, Get, HttpException, HttpStatus, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LanguageEntity } from 'src/domain/entities/language.entity';
import { LanguageService } from 'src/domain/services/language.service';
import { CreateLanguageDto } from '../dtos/language/createLanguage.dto';

@Controller('language')
export class LanguageController {

    private readonly logger = new Logger(LanguageController.name);

    constructor(private readonly languageService: LanguageService) { };

    @Get()
    async getAllLanguages(): Promise<LanguageEntity[]> {
        this.logger.log("Starting getAllLanguages Method.");

        return await this.languageService.listAll();
    }

    @UsePipes(ValidationPipe)
    @Post()
    async registerLanguage(@Body() createLanguage: CreateLanguageDto): Promise<LanguageEntity> {
        try {
            this.logger.log("Starting registerLanguage Method.");

            return await this.languageService.store(createLanguage);
        } catch (err) {
            this.logger.error(err.message);
            throw new HttpException(err.message, HttpStatus.CONFLICT);
        }
        
    }
}
