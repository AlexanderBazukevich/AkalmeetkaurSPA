import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsideService {

  isAsideVisible: BehaviorSubject<boolean>;

  constructor() {
    this.isAsideVisible = new BehaviorSubject<boolean>(true);
  }

  getAsideVisibility(): Observable<boolean> {
    return this.isAsideVisible.asObservable();
  }

  setAsideVisibility(value: boolean): void {
    this.isAsideVisible.next(value);
  }
}
