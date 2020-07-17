"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createrelacoes1594936858374 = void 0;

class createrelacoes1594936858374 {
  async up(queryRunner) {
    /*
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
    );*/
  }

  async down(queryRunner) {}

}

exports.createrelacoes1594936858374 = createrelacoes1594936858374;