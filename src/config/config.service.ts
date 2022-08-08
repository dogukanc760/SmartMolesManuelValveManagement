import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

require('dotenv').config();

export class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }
  
  //"pretypeorm": "(del ormconfig.json || :) && ts-node -r tsconfig-paths/register src/scripts/write-type-orm-config.ts",
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: '127.0.0.1',//this.getValue('POSTGRES_HOST'),
      port: 5432,//parseInt(this.getValue('POSTGRES_PORT')),
      username: 'postgres',//this.getValue('POSTGRES_USER'),
      password: '1234',//this.getValue('POSTGRES_PASSWORD'),
      database: 'SMUnitWork',//this.getValue('POSTGRES_DATABASE'),
      synchronize: false,
      entities: ['dist/**/*.entity{*.ts,*.js}'],

      migrationsTableName: 'migrations',

      migrations: ['src/migrations/*.ts'],
      
        // cli: {
        //   migrationsDir: 'src/migrations',
        // },

      ssl: false, //this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',
]);

export { configService };
