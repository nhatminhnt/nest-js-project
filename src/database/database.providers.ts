import { join } from 'path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const port = Number(process.env.DB_MASTER_PORT ?? 5432);

      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_MASTER_HOST,
        port,
        username: process.env.DB_MASTER_USERNAME,
        password: process.env.DB_MASTER_PASSWORD,
        database: process.env.DB_MASTER_DATABASE,
        entities: [join(__dirname, '..', '**', '*.entity{.ts,.js}')],
        synchronize: true,
        logging: process.env.DB_LOGGING === 'true',
      });

      return dataSource.initialize();
    },
  },
];
