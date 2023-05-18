import { LanguageEntity } from "src/domain/entities/language.entity";
import { ReturnUserDto } from "../user/returnUser.dto";
import { UserEntity } from "src/domain/entities/user.entity";

export class ReturnLanguageRelationsDto {

    id: number;
    name: string;
    abbreviation: string;
    createdAt: Date;
    updatedAt: Date;
    users: ReturnUserDto[];

    constructor(languageEntity: LanguageEntity) {
        this.id = languageEntity.id;
        this.name = languageEntity.name;
        this.abbreviation = languageEntity.abbreviation;
        this.createdAt = languageEntity.createdAt;
        this.updatedAt = languageEntity.updatedAt;
        this.users = this.hiddenPassword(languageEntity.users);
    }

    private hiddenPassword( userEntity: UserEntity[] ): ReturnUserDto[] {
        return userEntity.map(
            (user) => new ReturnUserDto(user),
        )
    }
    

}