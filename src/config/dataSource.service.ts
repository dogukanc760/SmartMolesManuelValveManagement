import { DataSource, DataSourceOptions } from 'typeorm';

const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'SMUnitWork',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

export function getConfig() {
    return {
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'SMUnitWork',
        migrations: ['src/migrations/*.ts'],
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
 } as DataSourceOptions; }