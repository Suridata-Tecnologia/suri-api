import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { LanguageEntity } from "./language.entity";

@Entity({ name: 'users' })
@Unique(['email'])
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_type', nullable: false })
    userType: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'email', nullable: false, unique: true })
    email: string;

    @Column({ name: 'email_send_at', nullable: true })
    emailSendAt: Date;

    @Column({ name: 'password', nullable: false })
    password: string;

    @Column({ name: 'access', nullable: false })
    access: number;

    @Column({ name: 'company', nullable: true })
    company: number;

    @Column({ name: 'view_dash', nullable: true })
    viewDash: number;

    @Column({ name: 'see_margin', nullable: true })
    seeMargin: number;

    @Column({ name: 'remember_token', nullable: true, length: 100 })
    rememberToken: string;

    @Column({ name: 'inactive', nullable: true })
    inactive: number;

    @Column({ name: 'email_verified_at', nullable: true })
    emailVerifiedAt: Date;

    @Column({ name: 'received_email', nullable: true })
    receivedEmail: number;

    @Column({ name: 'is_suridata_user', nullable: true })
    isSuridataUser: number;

    @Column({ name: 'is_business_user', nullable: true })
    isBusinessUser: number;

    @Column({ name: 'status_policy', nullable: true })
    statusPolicy: string;

    @Column({ name: 'response_date_policy', nullable: true })
    responseDatePolicy: string;

    @Column({ name: 'has_suriwallet_access', nullable: true })
    hasSuriwalletAccess: string;

    @Column({ name: 'birthday', nullable: true })
    birthday: string;

    @Column({ name: 'language_id', nullable: true })
    languageId: number;

    @ManyToOne( () => LanguageEntity, (language) => language.users )
    @JoinColumn({ name: 'language_id' })
    language: LanguageEntity;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}