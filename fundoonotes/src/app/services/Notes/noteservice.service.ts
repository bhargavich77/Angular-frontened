import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  token:any;

  constructor(private http:HttpService ) {this.token=localStorage.getItem('token') }
  add(data:any){

    let header={
                headers: new HttpHeaders({
                'Content-Type':'application/json',
                Authorization: this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',data,true,header)
  }

  get(){

    let header={
                headers: new HttpHeaders({
                'Content-Type':'application/json',
                Authorization: this.token
      })
    }
    return this.http.getservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',true,header)
  }
}
