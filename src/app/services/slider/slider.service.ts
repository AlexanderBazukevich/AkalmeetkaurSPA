import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  lastPage: number;

  constructor() { }

  getLastPage() {
    return this.lastPage;
  }

  setLastPage(value) {
    this.lastPage = value;
  }
}
