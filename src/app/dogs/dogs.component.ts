import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  showLoading = false;
  errorMsg = '';
  allBreeds = {};

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.showLoading = true;
    this.errorMsg = '';
    this.http.get('https://dog.ceo/api/breeds/list/all').subscribe({
      next: (response: any) => {
        if (response['status'] === 'success') {
          this.allBreeds = response['message'];
          console.log(this.allBreeds);
        } else {
          this.showLoading = false;
          this.errorMsg = response['message'];
        }
        this.showLoading = false;
      },
      error: (error:any) => {
        this.showLoading = false;
        this.errorMsg = error;
      }
    });
  }

}
