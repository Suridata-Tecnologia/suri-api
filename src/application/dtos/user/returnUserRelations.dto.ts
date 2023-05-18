import { UserEntity } from "src/domain/entities/user.entity";
import { ReturnLanguageDto } from "../language/returnLanguage.dto";

export class ReturnUserRelationsDto {

    id: number;
    name: string;
    email: string;
    emailSendAt: Date;
    access: number;
    company: number;
    viewDash: number;
    seeMargin: number;
    rememberToken: string;
    inactive: number;
    emailVerifiedAt: Date;
    receivedEmail: number;
    isSuridataUser: number;
    isBusinessUser: number;
    statusPolicy: string;
    responseDatePolicy: string;
    hasSuriwalletAccess: string;
    birthday: string;
    languageId: number;
    createdAt: Date;
    updatedAt: Date;
    language: ReturnLanguageDto;
    

    constructor(userEntity: UserEntity) {
        this.id = userEntity.id;
        this.name = userEntity.name;
        this.email = userEntity.email;
        this.emailSendAt = userEntity.emailSendAt;
        this.access = userEntity.access;
        this.company = userEntity.company;
        this.viewDash = userEntity.viewDash;
        this.seeMargin = userEntity.seeMargin;
        this.rememberToken = userEntity.rememberToken;
        this.inactive = userEntity.inactive;
        this.emailVerifiedAt = userEntity.emailVerifiedAt;
        this.receivedEmail = userEntity.receivedEmail;
        this.isSuridataUser = userEntity.isSuridataUser;
        this.isBusinessUser = userEntity.isBusinessUser;
        this.statusPolicy = userEntity.statusPolicy;
        this.responseDatePolicy = userEntity.responseDatePolicy;
        this.hasSuriwalletAccess = userEntity.hasSuriwalletAccess;
        this.birthday = userEntity.birthday;
        this.languageId = userEntity.languageId;
        this.createdAt = userEntity.createdAt;
        this.updatedAt = userEntity.updatedAt;
        this.language = userEntity.language;
    }

}