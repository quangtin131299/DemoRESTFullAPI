import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.css'],
})
export class FormtestComponent implements OnInit {
  @Input() maphim;
  @Input() tenphim;
  formAdd = new FormBuilder().group({
    tenPhim: '',
    rdocheck: '',
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.formAdd.value.rdocheck == 0) {
      let url: string = 'http://localhost:3000/phim';
      this.http
        .post(url, { tenPhim: this.formAdd.value.tenPhim })
        .subscribe((value) => {
          this.formAdd.reset();
          window.location.reload();
        });
    } else {
        let url: string = 'http://localhost:3000/phim';
        this.http
          .put(url, {id: this.maphim ,tenPhim: this.formAdd.value.tenPhim })
          .subscribe((value) => {
            this.formAdd.reset();
            window.location.reload();
          });
    }
  }
}


