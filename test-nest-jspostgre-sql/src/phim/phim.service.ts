import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Phim } from './phim.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';


@Injectable()
export class PhimService {

    constructor(@InjectRepository(Phim) private phimRepo: Repository<Phim>){}


    async finAll(): Promise<Phim[]>{
        return await this.phimRepo.find();
    }

    
    async createMovie(phim: Phim): Promise<Phim>{
        return await this.phimRepo.save(phim);
    }


    async delete(id: number): Promise<DeleteResult>{
        return await this.phimRepo.delete(id);
    }


    async update(phimnew: Phim):Promise<UpdateResult>{
        let phimUpdate = new Phim();
        phimUpdate.tenPhim = phimnew.tenPhim;
        phimUpdate.thoiGian = phimnew.thoiGian;
        phimUpdate.trailer = phimnew.trailer;
        phimUpdate.hinh = phimnew.hinh;
        phimUpdate.trangThai = phimnew.trangThai
        return await this.phimRepo.update(phimnew.id, phimUpdate);
    }


}
