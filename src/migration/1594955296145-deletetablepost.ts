import {MigrationInterface, QueryRunner} from "typeorm";

export class deletetablepost1594955296145 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        `DROP TABLE "post"`
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
