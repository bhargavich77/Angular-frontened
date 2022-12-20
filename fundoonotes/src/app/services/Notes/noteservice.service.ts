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

  updatenote(data: any) {
    
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes', data, true, header)
  }

  
  archivenote(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    console.log(data);
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',data,true,header)
  }


  trashnote(data: any) {
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', data, true, httpOptions)

  }

  changecolor(data:any) {
    // console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',data, true, header)
  }
  
  restore(data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', data, true, header)

  }
  deleteforever(data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/deleteForeverNotes', data, true, header)
  }
}
