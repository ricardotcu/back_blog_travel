"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finalcreaterelations1594948844553 = void 0;

class finalcreaterelations1594948844553 {
  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "post" ADD "userId" uuid;`);
    await queryRunner.query(`ALTER TABLE "comentario" ADD "postId" uuid;`);
    await queryRunner.query(`ALTER TABLE "comentario" ADD "userId" uuid;`);
    await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_2652456e912c983cde73d3281db" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "comentario" ADD CONSTRAINT "FK_4652456e912c983cde73d3281db" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "comentario" ADD CONSTRAINT "FK_5652456e912c983cde73d3281db" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  async down(queryRunner) {}

}

exports.finalcreaterelations1594948844553 = finalcreaterelations1594948844553;