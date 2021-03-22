import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhimModule } from './phim/phim.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phim } from './phim/phim.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'datvephim',
      entities: [Phim],
      synchronize: false,
    }),  
    PhimModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
