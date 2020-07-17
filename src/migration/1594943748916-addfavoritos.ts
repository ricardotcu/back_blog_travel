import {MigrationInterface, QueryRunner} from "typeorm";

export class addfavoritos1594943748916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        /*await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9b687d81-f0a5-4acd-aa79-3a17630d8c99', '9594cd3d-7943-42db-8bc3-aaadc5a47c87')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9b687d81-f0b5-4acd-aa79-3a17630d8c99', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9b687d81-f0c5-4acd-aa79-3a17630d8c99', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9b687d81-aea5-4acd-aa79-3a17630d8c99', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9b687d81-f0a5-4acd-aa79-3a17640d8c99', '9594cd3d-7943-42db-8bc3-aaadc5a47c87')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9b684d81-f0a5-4acd-aa79-3a17630d8c99', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9b687d81-f0a5-4aad-aa79-3a17630d8c99', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9b687d81-f0a5-4acd-aa79-3a17630d3c99', '8f9f24b1-be1b-4639-b976-65b5d72d10c9')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9b687d81-f0b5-4acd-aa79-8a17630d8c99', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('ba3ce2fa-b18a-4ef6-aad2-a5e4c14cdf9b', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );*/
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
