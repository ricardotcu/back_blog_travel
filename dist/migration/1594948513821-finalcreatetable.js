"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finalcreatetable1594948513821 = void 0;

class finalcreatetable1594948513821 {
  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "nome" character varying(100) NOT NULL, 
        "email" character varying(100) NOT NULL, 
        "senha" character varying(100) NOT NULL,  
        "caminho" character varying(100),
        CONSTRAINT "UQ_ba7f210baab523048c0386c3463" UNIQUE ("email"), 
        CONSTRAINT "PK_139512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "titulo" character varying(100) NOT NULL, 
        "descricao" character varying(100) NOT NULL,  
        "caminho" character varying(100) NOT NULL,
        CONSTRAINT "PK_239512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "comentario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "descricao" character varying(100) NOT NULL,
        CONSTRAINT "PK_339512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`);
  }

  async down(queryRunner) {}

}

exports.finalcreatetable1594948513821 = finalcreatetable1594948513821;