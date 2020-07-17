import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class finalcreaterelations1594948844553 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
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
        );

        await queryRunner.query(
            `ALTER TABLE "post" ADD CONSTRAINT "FK_2652456e912c983cde73d3281db" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "favorito" ADD CONSTRAINT "FK_3652456e912c983cde73d3281db" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "comentario" ADD CONSTRAINT "FK_4652456e912c983cde73d3281db" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "comentario" ADD CONSTRAINT "FK_5652456e912c983cde73d3281db" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
