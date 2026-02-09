import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_MASTER_HOST,
        port: 5432,
        username: process.env.DB_MASTER_USERNAME,
        password: process.env.DB_MASTER_PASSWORD,
        database: process.env.DB_MASTER_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
