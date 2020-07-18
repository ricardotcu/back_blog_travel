import {MigrationInterface, QueryRunner} from "typeorm";

export class createtblenxn1595055236817 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `CREATE TABLE "favpost" ("favId" uuid NOT NULL, "postId" uuid NOT NULL, CONSTRAINT "PK_3ef0759852caaefb9bac7cf913e" PRIMARY KEY ("favId", "postId"))`
      );
      await queryRunner.query(
        `ALTER TABLE "favpost" ADD CONSTRAINT "FK_ccb4ae4609bfbf4d022560a3f8c" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
      );
      await queryRunner.query(
        `ALTER TABLE "favpost" ADD CONSTRAINT "FK_9a616bdfff1c46bddeb8ad78dbf" FOREIGN KEY ("favId") REFERENCES "favorito"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
