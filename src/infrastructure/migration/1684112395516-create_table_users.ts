import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableUsers1684112395516 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE users (
                id INT UNSIGNED NOT NULL AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                email_send_at TIMESTAMP NULL,
                password VARCHAR(255) NOT NULL,
                access INT NOT NULL,
                company INT NULL,
                view_dash INT NULL,
                see_margin INT NULL,
                remember_token VARCHAR(255) NULL,
                inactive INT NULL,
                email_verified_at TIMESTAMP NULL,
                received_email INT NULL,
                is_suridata_user INT NULL,
                is_business_user INT NULL,
                status_policy VARCHAR(255) NULL,
                response_date_policy VARCHAR(255) NULL,
                has_suriwallet_access VARCHAR(255) NULL,
                birthday VARCHAR(255) NULL,
                language_id INT UNSIGNED NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (id),
                CONSTRAINT FK_user_language FOREIGN KEY (language_id) REFERENCES languages (id) ON DELETE SET NULL
            ) ENGINE=InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users`);
    }

}
