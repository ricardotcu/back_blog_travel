"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addusers1594937569546 = void 0;

class addusers1594937569546 {
  async up(queryRunner) {
    await queryRunner.query(`INSERT INTO "user" ("nome", "email", "senha") VALUES ('r', 'r@r.com', 'fd0eecba-2d33-4e94-a20f-bdb356e4d50d')`);
    await queryRunner.query(`INSERT INTO "user" ("nome", "email", "senha") VALUES ('ricardo', 'ricardo@ricardo.com', '0710da4b-f5a5-456e-9172-c12dcfa8455b')`);
    await queryRunner.query(`INSERT INTO "user" ("nome", "email", "senha") VALUES ('abc', 'abc@abc.com', '4fc4b920-7350-4beb-9290-2647e527768e')`);
  }

  async down(queryRunner) {}

}

exports.addusers1594937569546 = addusers1594937569546;