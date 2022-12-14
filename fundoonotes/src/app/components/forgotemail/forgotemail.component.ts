import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.scss']
})
export class ForgotemailComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          
        email: ['', [Validators.required, Validators.email]],
          
          
      });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }else{
      console.log("form is valid",this.registerForm.value)
      let fmaildata={
        email:this.registerForm.value.email,
      }
      this.user.forgotmail(fmaildata).subscribe((res:any)=>{
        console.log(res);
      })
    }

    // display form values on success
    
}
}
