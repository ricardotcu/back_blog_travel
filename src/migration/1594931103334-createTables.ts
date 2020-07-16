import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1594931103334 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "nome" character varying(100) NOT NULL, 
        "email" character varying(100) NOT NULL, 
        "senha" character varying(100) NOT NULL,  
        "caminho" character varying(100),
        CONSTRAINT "UQ_ba7f210baab523048c0386c3463" UNIQUE ("email"), 
        CONSTRAINT "PK_139512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );
      await queryRunner.query(
        `CREATE TABLE "post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "titulo" character varying(100) NOT NULL, 
        "descricao" character varying(100) NOT NULL,  
        "caminho" character varying(100) NOT NULL,
        CONSTRAINT "UQ_ca7f210baab523048c0386c3463" UNIQUE ("titulo"), 
        CONSTRAINT "PK_239512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );
      await queryRunner.query(
        `CREATE TABLE "comentario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "descricao" character varying(100) NOT NULL,
        CONSTRAINT "UQ_da7f210baab523048c0386c3463" UNIQUE ("descricao"), 
        CONSTRAINT "PK_339512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );
      await queryRunner.query(
        `CREATE TABLE "favorito" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "id_user" uuid NOT NULL,
        CONSTRAINT "UQ_ea7f210baab523048c0386c3463" UNIQUE ("id_user"), 
        CONSTRAINT "PK_439512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
