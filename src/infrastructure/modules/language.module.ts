import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageController } from 'src/application/controllers/language.controller';
import { LanguageEntity } from 'src/domain/entities/language.entity';
import { LanguageService } from 'src/domain/services/language.service';

@Module({
    imports: [TypeOrmModule.forFeature([LanguageEntity])],
    controllers: [LanguageController],
    providers: [LanguageService]
})
export class LanguageModule {}
