import {MigrationInterface, QueryRunner} from "typeorm";

export class addfavoritos1594943748916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('8f9df24b1-be1b-4639-b976-65b5d72d10c9', '9594cd3d-7943-42db-8bc3-aaadc5a47c87')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('8f9f24b1-bea1b-4639-b976-65b5d72d10c9', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('8f9f24b1-be1gb-4639-b976-65ab5d72d10c9', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9594cd3d-7943-42dgb-8bc3-aaadc5a47c87', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9594cd3d-7943-42db-8bc3-aaadcn5a47c87', '9594cd3d-7943-42db-8bc3-aaadc5a47c87')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('8f9f24b1-be1b-463r9-b976-65b5d72d10c9', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('ed44f862-0663-458h6-b0c8-3527be16736c', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('9594cd3d-7943-42db-8bc3-aaadc5a47c87', '8f9f24b1-be1b-4639-b976-65b5d72d10c9')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('8f9f24b1-beae1b-4639-b976-65b5d72d10c9', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
        await queryRunner.query(
          `INSERT INTO "favorito" ("id_user", "userid") VALUES ('ed44f862-0663-4586-b0c8-3527hebe16736c', 'ed44f862-0663-4586-b0c8-3527be16736c')`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
