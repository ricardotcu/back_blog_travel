import {MigrationInterface, QueryRunner} from "typeorm";

export class addusers1594937569546 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
        `INSERT INTO "user" ("nome", "email", "senha") VALUES ('r', 'r@r.com', fd0eecba-2d33-4e94-a20f-bdb356e4d50d)`
    );
    await queryRunner.query(
        `INSERT INTO user (nome, email, senha) VALUES ('ricardo', 'ricardo@ricardo.com', 0710da4b-f5a5-456e-9172-c12dcfa8455b)`
    );
    await queryRunner.query(
        `INSERT INTO user (nome, email, senha) VALUES ('abc', 'abc@abc.com', '4fc4b920-7350-4beb-9290-2647e527768e')`
    );
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
