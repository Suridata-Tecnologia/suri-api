import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/application/controllers/user.controller';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserService } from 'src/domain/services/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
