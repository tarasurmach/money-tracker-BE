import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        console.log(dbConfig);
        return dbConfig;
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
