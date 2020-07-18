"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createtablefavpostcerto1595061559999 = void 0;

class createtablefavpostcerto1595061559999 {
  async up(queryRunner) {
    await queryRunner.query(`DROP TABLE "favpost"`);
    await queryRunner.query(`CREATE TABLE "user_favoritos_post" ("userId" uuid NOT NULL, "postId" uuid NOT NULL, CONSTRAINT "PK_3ef0759852caaefb9bac7cf913e" PRIMARY KEY ("userId", "postId"))`);
    await queryRunner.query(`CREATE INDEX "IDX_ccb4ae4609bfbf4d022560a3f8" ON "user_favoritos_post" ("userId") `);
    await queryRunner.query(`CREATE INDEX "IDX_9a616bdfff1c46bddeb8ad78db" ON "user_favoritos_post" ("postId") `);
    await queryRunner.query(`ALTER TABLE "user_favoritos_post" ADD CONSTRAINT "FK_ccb4ae4609bfbf4d022560a3f8c" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "user_favoritos_post" ADD CONSTRAINT "FK_9a616bdfff1c46bddeb8ad78dbf" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await queryRunner.query(`INSERT INTO "user_favoritos_post" ("userId", "postId") VALUES ('666c0df3-4af7-48f7-ab3e-54a703fee1a6',
          '9a8a0c88-475f-485c-b944-abb11bf19a10')`);
    await queryRunner.query(`INSERT INTO "user_favoritos_post" ("userId", "postId") VALUES ('666c0df3-4af7-48f7-ab3e-54a703fee1a6',
          '0441b43a-ab8a-419d-b986-7ec456e43542')`);
    await queryRunner.query(`INSERT INTO "user_favoritos_post" ("userId", "postId") VALUES ('666c0df3-4af7-48f7-ab3e-54a703fee1a6',
          '028ec9b4-bbcc-49e6-bd60-77dc91ffd485')`);
    await queryRunner.query(`INSERT INTO "user_favoritos_post" ("userId", "postId") VALUES ('42d680d8-5895-43da-bafa-abfd1c113827',
          '9a8a0c88-475f-485c-b944-abb11bf19a10')`);
  }

  async down(queryRunner) {}

}

exports.createtablefavpostcerto1595061559999 = createtablefavpostcerto1595061559999;