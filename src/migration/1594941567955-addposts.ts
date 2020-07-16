import {MigrationInterface, QueryRunner} from "typeorm";

export class addposts1594941567955 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '8f9f24b1-be1b-4639-b976-65b5d72d10c9')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '8f9f24b1-be1b-4639-b976-65b5d72d10c9')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '8f9f24b1-be1b-4639-b976-65b5d72d10c9')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '8f9f24b1-be1b-4639-b976-65b5d72d10c9')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '8f9f24b1-be1b-4639-b976-65b5d72d10c9')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '8f9f24b1-be1b-4639-b976-65b5d72d10c9')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '8f9f24b1-be1b-4639-b976-65b5d72d10c9')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '9594cd3d-7943-42db-8bc3-aaadc5a47c87')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '9594cd3d-7943-42db-8bc3-aaadc5a47c87')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        'ed44f862-0663-4586-b0c8-3527be16736c')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        'ed44f862-0663-4586-b0c8-3527be16736c')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        'ed44f862-0663-4586-b0c8-3527be16736c')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        'ed44f862-0663-4586-b0c8-3527be16736c')`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
