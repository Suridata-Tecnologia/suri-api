import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: 'languages' })
export class LanguageEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'abbreviation', nullable: false })
    abbreviation: string;

    @OneToMany( () => UserEntity, (user) => user.language )
    users: UserEntity[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}