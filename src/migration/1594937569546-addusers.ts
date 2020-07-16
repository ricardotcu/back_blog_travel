import {MigrationInterface, QueryRunner} from "typeorm";

export class addusers1594937569546 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
        `INSERT INTO user (nome, email, senha) VALUES ('r', 'r@r.com', 123456)`,
    );
    await queryRunner.query(
        "INSERT INTO user (nome, email, senha) VALUES ('ricardo', 'ricardo@ricardo.com', 123456)",
    );
    await queryRunner.query(
        "INSERT INTO user (nome, email, senha) VALUES ('abc', 'abc@abc.com', 123456)",
    );
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
