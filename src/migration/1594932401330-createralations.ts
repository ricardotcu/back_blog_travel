import {MigrationInterface, QueryRunner} from "typeorm";

export class createralations1594932401330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {/*
      await queryRunner.query(
        `ALTER TABLE "post" ADD "userId" uuid;`
      );
      await queryRunner.query(
        `ALTER TABLE "favorito" ADD "userId" uuid;`
      );
      await queryRunner.query(
        `ALTER TABLE "comentario" ADD "postId" uuid;`
      );
      await queryRunner.query(
        `ALTER TABLE "comentario" ADD "userId" uuid;`
      );*/

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
