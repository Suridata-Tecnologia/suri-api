import { UserEntity } from "src/domain/entities/user.entity";

export class LoginPayloadDto {
    id: number;
    
    constructor(user: UserEntity) {
        this.id = user.id;
    }
}