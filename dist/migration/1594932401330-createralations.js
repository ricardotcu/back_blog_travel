"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createralations1594932401330 = void 0;

class createralations1594932401330 {
  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE post ADD userId uuid NOT NULL;`);
    await queryRunner.query(`ALTER TABLE favorito ADD userId uuid NOT NULL;`);
    await queryRunner.query(`ALTER TABLE comentario ADD postId uuid NOT NULL;`);
    await queryRunner.query(`ALTER TABLE comentario ADD userId uuid NOT NULL;`);
  }

  async down(queryRunner) {}

}

exports.createralations1594932401330 = createralations1594932401330;