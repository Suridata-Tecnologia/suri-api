import { LanguageEntity } from "src/domain/entities/language.entity";

export class ReturnLanguageDto {

    id: number;
    name: string;
    abbreviation: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(languageEntity: LanguageEntity) {
        this.id = languageEntity.id;
        this.name = languageEntity.name;
        this.abbreviation = languageEntity.abbreviation;
        this.createdAt = languageEntity.createdAt;
        this.updatedAt = languageEntity.updatedAt;
    }

}