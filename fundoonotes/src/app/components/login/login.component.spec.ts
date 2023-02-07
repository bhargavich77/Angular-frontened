import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ReactiveFormsModule,HttpClientModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule],

    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render Sign in in a h1 tag',(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('h1').textContent).toEqual('Sign in');
  }));
  it('CHECK INITIAL FORM VALUES FOR LOGIN FORM GROUP', () => {
    const loginFormGroup = component.registerForm;
    const loginFormValues = {
      email: '',
      password: ''
    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  })
});
