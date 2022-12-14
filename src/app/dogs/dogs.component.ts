import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Utils from '../utils';

interface Dog {
  breed?: string;
  image?: string;
}

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  showLoading = false;
  errorMsg = '';
  breeds: Array<string> = [];
  numberOfDogsToShow = 11;
  images: Array<Dog> = [];
  selectedDog: Dog = {};

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.loadAddBreeds();
  }

  loadAddBreeds() {
    this.showLoading = true;
    this.errorMsg = '';
    this.http.get('https://dog.ceo/api/breeds/list/all').subscribe({
      next: (response: any) => {
        if (response['status'] === 'success') {
          this.breeds = Object.keys(response['message']);
          
          // takes the list of all breeds and chooses a random set without duplicates
          let shortList: Array<string> = [];
          while(shortList.length < this.numberOfDogsToShow) {
            shortList.push(this.breeds[Math.floor(Math.random() * this.breeds.length)]);
            shortList = Utils.removeDuplicates(shortList);
          }
          this.breeds = shortList;

          // there's definitely a better way of calling a bunch of APIs at the same time
          // particularly because if one fails the error message won't be shown
          // I could use forkJoin or something, but this works for demonstration purposes
          this.breeds.forEach(breed => {
            this.loadImageForBreed(breed);
          });
        } else {
          this.showLoading = false;
          this.errorMsg = response['message'];
        }
      },
      error: (error:any) => {
        this.showLoading = false;
        this.errorMsg = error;
      }
    });
  }

  loadImageForBreed(breed: string) {
    this.showLoading = true;
    this.errorMsg = '';
    this.http.get(`https://dog.ceo/api/breed/${breed}/images`).subscribe({
      next: (response: any) => {
        if (response['status'] === 'success') {
          let images = response['message'];
          const dog = {
            breed: breed,
            image: images[Math.floor(Math.random() * images.length)]
          };
          this.images.push(dog);
          if (this.images.length === 1) {
            this.selectedDog = dog;
          }
          this.showLoading = false;
        } else {
          this.showLoading = false;
          this.errorMsg = response['message'];
        }
      },
      error: (error:any) => {
        this.showLoading = false;
        this.errorMsg = error;
      }
    });
  }

}
