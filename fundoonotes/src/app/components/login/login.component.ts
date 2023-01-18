import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  valuedata:any

  constructor(private formBuilder: FormBuilder,private user:UserService,private router:Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      });
      // localStorage.setItem('SessionUser',this.user)
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }else{
      console.log("form is valid",this.registerForm.value)
      let signindata={
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
      }
      this.user.login(signindata).subscribe((res:any)=>{
        console.log(res);
        this.valuedata=res;
        console.log(this.valuedata)
        localStorage.setItem('token',res.id)
        localStorage.setItem('email',res.email);
        localStorage.setItem('fname',res.firstName);
        localStorage.setItem('lname',res.lastName);
       
        this.router.navigateByUrl('/Dashboard/Notes')
      })
    }

    // display form values on success
    
}
}

