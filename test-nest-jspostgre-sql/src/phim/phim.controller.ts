import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Phim } from './phim.entity';
import { PhimService } from './phim.service';

@Controller('phim')
export class PhimController {


    constructor(private phimService: PhimService){}

    @Get()
    getMovie(): Promise<Phim[]>{
        return this.phimService.finAll();
    }


    @Post()
    creatMovie(@Body() phimNew: Phim): Promise<Phim>{
   
        return this.phimService.createMovie(phimNew);
    }


    @Delete(':id')
    removeMovie(@Param() params): Promise<DeleteResult>{
        return this.phimService.delete(params.id);
    }


    @Put()
    updateMovie(@Body() phim: Phim):Promise<UpdateResult>{
        return this.phimService.update(phim);
    }


}
