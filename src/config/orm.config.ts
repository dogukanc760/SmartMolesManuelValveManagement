import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeOrmModuleOptions:TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(<string>process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [
        __dirname + '/../**/entities/*.entity.{ts,js}',
    ],
    /* Note : it is unsafe to use synchronize: true for schema synchronization
    on production once you get data in your database. */
    // synchronize: true,
    autoLoadEntities: true,
}

export const OrmConfig = {
    ...typeOrmModuleOptions,
    migrationsTableName: "migrations",
    migrations: ["src/migrations/*.ts"],
    cli: {
        "migrationDir": "src/migrations"
    }
};
export default OrmConfig;