import {MigrationInterface, QueryRunner} from "typeorm";

export class addposts1594941567955 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        'fd0eecba-2d33-4e94-a20f-bdb356e4d50d')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        'fd0eecba-2d33-4e94-a20f-bdb356e4d50d')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        'fd0eecba-2d33-4e94-a20f-bdb356e4d50d')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        'fd0eecba-2d33-4e94-a20f-bdb356e4d50d')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        'fd0eecba-2d33-4e94-a20f-bdb356e4d50d')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        'fd0eecba-2d33-4e94-a20f-bdb356e4d50d')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        'fd0eecba-2d33-4e94-a20f-bdb356e4d50d')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '0710da4b-f5a5-456e-9172-c12dcfa8455b')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '4fc4b920-7350-4beb-9290-2647e527768e')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '4fc4b920-7350-4beb-9290-2647e527768e')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '4fc4b920-7350-4beb-9290-2647e527768e')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '4fc4b920-7350-4beb-9290-2647e527768e')`
      );
      await queryRunner.query(
        `INSERT INTO "post" ("titulo", "descricao", "caminho", "userid") VALUES ('A Loving Heart is the Truest Wisdom', 
        'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. 
        Nihil quod.', 
        '../../assets/images/image_1.jpg', 
        '4fc4b920-7350-4beb-9290-2647e527768e')`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
