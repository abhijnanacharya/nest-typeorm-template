import { MigrationInterface, QueryRunner } from 'typeorm';

export class Timestamp1679164796296 implements MigrationInterface {
  name = 'Timestamp1679164796296';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "createdAt" integer NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_user"("id", "firstName", "lastName", "email", "password") SELECT "id", "firstName", "lastName", "email", "password" FROM "user"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "user"("id", "firstName", "lastName", "email", "password") SELECT "id", "firstName", "lastName", "email", "password" FROM "temporary_user"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_user"`);
  }
}
