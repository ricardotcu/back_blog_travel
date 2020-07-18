import {MigrationInterface, QueryRunner} from "typeorm";

export class addcomentarios1595056156369 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(`DROP TABLE "favpost"`);


    await queryRunner.query(
      `CREATE TABLE "favpost" ("userId" uuid NOT NULL, "postId" uuid NOT NULL, CONSTRAINT "PK_3ef0759852caaefb9bac7cf913e" PRIMARY KEY ("userId", "postId"))`
    );
    await queryRunner.query(
      `ALTER TABLE "favpost" ADD CONSTRAINT "FK_ccb4ae4609bfbf4d022560a3f8c" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "favpost" ADD CONSTRAINT "FK_9a616bdfff1c46bddeb8ad78dbf" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );

    await queryRunner.query(
      `CREATE INDEX "IDX_ccb4ae4609bfbf4d022560a3f8" ON "favpost" ("userId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9a616bdfff1c46bddeb8ad78db" ON "favpost" ("postId") `,
    );



    await queryRunner.query(
      `INSERT INTO "comentario" ("descricao", "postId", "userId") VALUES ('comentario comentario 
      comentario comentario comentario comentariocomentariocomentariocontario', 
      '9a8a0c88-475f-485c-b944-abb11bf19a10',
      '666c0df3-4af7-48f7-ab3e-54a703fee1a6')`
    );
    await queryRunner.query(
      `INSERT INTO "comentario" ("descricao", "postId", "userId") VALUES ('comentario comentario 
      comentario comentario comentario comentario comentario comeiocomentario', 
      '7e8d05a7-0a19-4bfc-b9ad-fd1458c6ede2',
      '666c0df3-4af7-48f7-ab3e-54a703fee1a6')`
    );
    await queryRunner.query(
      `INSERT INTO "comentario" ("descricao", "postId", "userId") VALUES ('comentario comentario 
      comentario comentario comentario comentario comentario comentario comen', 
      '7e8d05a7-0a19-4bfc-b9ad-fd1458c6ede2',
      '42d680d8-5895-43da-bafa-abfd1c113827')`
    );
    await queryRunner.query(
      `INSERT INTO "comentario" ("descricao", "postId", "userId") VALUES ('comentariocomenrio 
      comentario comentario comentario comentario comentario comentario comtario', 
      '7e8d05a7-0a19-4bfc-b9ad-fd1458c6ede2',
      '666c0df3-4af7-48f7-ab3e-54a703fee1a6')`
    );
    await queryRunner.query(
      `INSERT INTO "comentario" ("descricao", "postId", "userId") VALUES ('comentario comentario 
      comentario comentario comentario comentario comentario comentarientario', 
      'daea73a1-4aea-4f93-a567-b793a733e3e0',
      '666c0df3-4af7-48f7-ab3e-54a703fee1a6')`
    );
    await queryRunner.query(
      `INSERT INTO "comentario" ("descricao", "postId", "userId") VALUES ('comentario comentario 
      comentario comentario comentario comentario comentario comentao comeaio', 
      'daea73a1-4aea-4f93-a567-b793a733e3e0',
      '42d680d8-5895-43da-bafa-abfd1c113827')`
    );

    await queryRunner.query(
      `INSERT INTO "favpost" ("userId", "postId") VALUES ('666c0df3-4af7-48f7-ab3e-54a703fee1a6',
      '42d680d8-5895-43da-bafa-abfd1c113827')`
    );
    await queryRunner.query(
      `INSERT INTO "favpost" ("userId", "postId") VALUES ('666c0df3-4af7-48f7-ab3e-54a703fee1a6',
      '7e8d05a7-0a19-4bfc-b9ad-fd1458c6ede2')`
    );
    await queryRunner.query(
      `INSERT INTO "favpost" ("userId", "postId") VALUES ('666c0df3-4af7-48f7-ab3e-54a703fee1a6',
      '42d680d8-5895-43da-bafa-abfd1c113827')`
    );
    await queryRunner.query(
      `INSERT INTO "favpost" ("userId", "postId") VALUES ('daea73a1-4aea-4f93-a567-b793a733e3e0',
      '7e8d05a7-0a19-4bfc-b9ad-fd1458c6ede2')`
    );
  }
    

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
