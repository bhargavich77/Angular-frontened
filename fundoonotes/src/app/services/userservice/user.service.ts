import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fmail, Signin, Signup, User } from 'src/app/user.model';
import { HttpService } from '../httpservice/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='https://localhost:8080/api/users'
  constructor(private http:HttpService,private Http:HttpClient) { }
  onSubmit(): Observable<User[]> {
    return this.Http.get<User[]>(this.apiUrl)
  }
  register(data:Signup){

    let header={
                headers: new HttpHeaders({
                'Content-Type':'application/json'
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',data,false,header)
  }
  login(data:Signin){

    let header={
                headers: new HttpHeaders({
                'Content-Type':'application/json'
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/login',data,false,header)
  }
  forgotmail(data:Fmail){

    let header={
                headers: new HttpHeaders({
                'Content-Type':'application/json'
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/reset',data,false,header)
  }
  
}
