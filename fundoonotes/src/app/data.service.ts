import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private info = new Subject<any>();
  public store = this.info.asObservable();
  constructor() { }
  changeMessage(message: any) {
    this.messageSource.next(message)
  }
  nextDataUpdate(text:any){
    this.info.next(text);
  }
}
