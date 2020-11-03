import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsideService {

  isAsideVisible: BehaviorSubject<boolean>;

  constructor() {
    this.isAsideVisible = new BehaviorSubject<boolean>(true);
  }

  getAsideVisibility() {
    return this.isAsideVisible.asObservable();
  }

  setAsideVisibility(value: boolean) {
    this.isAsideVisible.next(value);
  }
}
