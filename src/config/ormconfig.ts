import { DataSourceOptions } from 'typeorm';

const entities = [];

export const dbConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities,
  migrationsRun: false,
  synchronize: false,
  logging: false,
};
