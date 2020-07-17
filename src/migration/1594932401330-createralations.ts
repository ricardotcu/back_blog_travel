import {MigrationInterface, QueryRunner} from "typeorm";

export class createralations1594932401330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {/*
      await queryRunner.query(
        `ALTER TABLE post ADD userid uuid NOT NULL;`
      );
      await queryRunner.query(
        `ALTER TABLE favorito ADD userid uuid NOT NULL;`
      );
      await queryRunner.query(
        `ALTER TABLE comentario ADD postid uuid NOT NULL;`
      );
      await queryRunner.query(
        `ALTER TABLE comentario ADD userid uuid NOT NULL;`
      );*/

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
