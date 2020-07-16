
module.exports = {
    "type": "postgres",
    "url": "postgres://qfzquwniosjmwg:7460705f5cccdb0d1a7fd4fa446d705558f07f9edb17a4230b03778ed19a1bac@ec2-54-211-210-149.compute-1.amazonaws.com:5432/d348eisj5tb4qs",
    ssl: {
       rejectUnauthorized: false
    },
    "synchronize": false,
    "logging": false,
    "entities": [
       "dist/entity/**/*.js"
    ],
    "migrations": [
       "dist/migration/**/*.js"
    ],
    "subscribers": [
       "dist/subscriber/**/*.js"
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 }