import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phim } from './phim.entity';
import { PhimController } from './phim.controller';
import { PhimService } from './phim.service';

@Module({
    imports: [TypeOrmModule.forFeature([Phim])],
    controllers: [PhimController],
    providers:[PhimService]
})
export class PhimModule {}
