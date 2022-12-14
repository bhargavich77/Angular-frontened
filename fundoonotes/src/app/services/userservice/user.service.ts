import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }
  register(data:any){

    let header={
                headers: new HttpHeaders({
                'Content-Type':'application/json'
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',data,false,header)
  }
  login(data:any){

    let header={
                headers: new HttpHeaders({
                'Content-Type':'application/json'
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/login',data,false,header)
  }
  forgotmail(data:any){

    let header={
                headers: new HttpHeaders({
                'Content-Type':'application/json'
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/reset',data,false,header)
  }
  
}
