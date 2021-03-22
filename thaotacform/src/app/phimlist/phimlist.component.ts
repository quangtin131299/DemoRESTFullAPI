import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phimlist',
  templateUrl: './phimlist.component.html',
  styleUrls: ['./phimlist.component.css'],
})
export class PhimlistComponent implements OnInit {
  id;
  tenPhim;
  displayedColumns: string[] = ['ID', 'TenPhim', 'ThaoTac'];
  phims;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let url = 'http://localhost:3000/phim';
    this.http.get(url).subscribe((value) => {
      this.phims = value;
    });
  }

  onClickDelete(id) {
    let url = `http://localhost:3000/phim/${id}`;
    this.http.delete(url).subscribe((value) => {
      console.log(value);
      window.location.reload();
    });
  }

  onClickUpdate(id,tenphim){
    this.id =id; 
    this.tenPhim = tenphim;
  }



}
// <{id: number, tenPhim: string, trangThai: string, thoiGian:number, trailer: number}[]>
