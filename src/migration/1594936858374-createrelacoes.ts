import {MigrationInterface, QueryRunner} from "typeorm";

export class createrelacoes1594936858374 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `ALTER TABLE "post" ADD CONSTRAINT "FK_2652456e912c983cde73d3281db" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
      );
      await queryRunner.query(
        `ALTER TABLE "favorito" ADD CONSTRAINT "FK_3652456e912c983cde73d3281db" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
      );
      await queryRunner.query(
        `ALTER TABLE "comentario" ADD CONSTRAINT "FK_4652456e912c983cde73d3281db" FOREIGN KEY ("postid") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
      );
      await queryRunner.query(
        `ALTER TABLE "comentario" ADD CONSTRAINT "FK_5652456e912c983cde73d3281db" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
