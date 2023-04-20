import { MigrationInterface, QueryRunner } from "typeorm";

export class $migration1681972850125 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO user_roles (created, updated, type, name, permissions) VALUES (CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), 'superadmin', 'superadmin', '{}')`
    );
    await queryRunner.query(
      `INSERT INTO user_roles (created, updated, type, name, permissions) VALUES (CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), 'user', 'user', '{ "getUserProfile", "updateUserProfile", "refreshToken"}')`
    );
    await queryRunner.query(
      `INSERT INTO users (created, updated, email, password, first_name, last_name, role_id, role_type) VALUES (CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), 'superadmin@gmail.com', '123123123', 'Superadmin', 'Superadmin', 1, 'superadmin')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
