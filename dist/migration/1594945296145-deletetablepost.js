"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletetablepost1594945296145 = void 0;

class deletetablepost1594945296145 {
  async up(queryRunner) {
    `DROP TABLE post`;
  }

  async down(queryRunner) {}

}

exports.deletetablepost1594945296145 = deletetablepost1594945296145;