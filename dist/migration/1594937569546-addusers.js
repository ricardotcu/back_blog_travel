"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addusers1594937569546 = void 0;

class addusers1594937569546 {
  async up(queryRunner) {
    await queryRunner.query(`INSERT INTO user (nome, email, senha) VALUES ('r', 'r@r.com', 123456)`);
    await queryRunner.query("INSERT INTO user (nome, email, senha) VALUES ('ricardo', 'ricardo@ricardo.com', 123456)");
    await queryRunner.query("INSERT INTO user (nome, email, senha) VALUES ('abc', 'abc@abc.com', 123456)");
  }

  async down(queryRunner) {}

}

exports.addusers1594937569546 = addusers1594937569546;