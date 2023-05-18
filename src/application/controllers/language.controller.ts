import { Body, ConflictException, Controller, Get, Logger, NotFoundException, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LanguageEntity } from 'src/domain/entities/language.entity';
import { LanguageService } from 'src/domain/services/language.service';
import { RegisterLanguageDto } from '../dtos/language/registerLanguage.dto';
import { ReturnLanguageDto } from '../dtos/language/returnLanguage.dto';
import { ReturnLanguageRelationsDto } from '../dtos/language/returnLanguageRelations.dto';

@Controller('language')
export class LanguageController {

    private readonly logger = new Logger(LanguageController.name);


    constructor(private readonly languageService: LanguageService) { };


    @Get()
    async getAllLanguages(): Promise<ReturnLanguageDto[]> {
        this.logger.log("Starting getAllLanguages Method.");

        return (await this.languageService.listAll()).map(
            (languageEntity) => new ReturnLanguageDto(languageEntity),
        );
    }


    @Get('relations')
    async getAllLanguagesWithRelations(): Promise<ReturnLanguageRelationsDto[]> {
        this.logger.log("Starting getAllLanguagesWithRelations Method.");

        return (await this.languageService.listAll()).map(
            (languageEntity) => new ReturnLanguageRelationsDto(languageEntity),
        )
    }


    @Get(':languageId')
    async getLanguageById(@Param('languageId') languageId: number): Promise<ReturnLanguageDto> {
        try {
            this.logger.log("Starting getLanguageById Method.");
            
            const language = await this.languageService.findById(languageId);
            return new ReturnLanguageDto(language);
        } catch(err) {
            this.logger.error(err.message);
            throw new NotFoundException;
        }   
    }


    @Get(':languageId/relations')
    async getLanguageByIdWithRelations(@Param('languageId') languageId: number): Promise<ReturnLanguageRelationsDto> {
        try {
            this.logger.log("Starting getLanguageByIdWithRelations Method.");
            
            const language = await this.languageService.findById(languageId);
            return new ReturnLanguageRelationsDto(language);
        } catch(err) {
            this.logger.error(err.message);
            throw new NotFoundException;
        }   
    }


    @UsePipes(ValidationPipe)
    @Post()
    async registerLanguage(@Body() languageToRegister: RegisterLanguageDto): Promise<ReturnLanguageDto> {
        try {
            this.logger.log("Starting registerLanguage Method.");

            const languageRegistered = await this.languageService.store(languageToRegister);
            return new ReturnLanguageDto(languageRegistered);
        } catch (err) {
            this.logger.error(err.message);
            throw new ConflictException;
        }
        
    }
}
