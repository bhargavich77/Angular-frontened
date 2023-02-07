import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignComponent } from './sign.component';

describe('SignComponent', () => {
  let component: SignComponent;
  let fixture: ComponentFixture<SignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignComponent ],
      imports:[FormsModule,ReactiveFormsModule,HttpClientModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render Create your Fundoo Account in a h1 tag',(() => {
    const fixture = TestBed.createComponent(SignComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('h1').textContent).toContain('Create your Fundoo Account');
  }));
  it('should render First Name',(() => {
    const fixture = TestBed.createComponent(SignComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('mat-label').textContent).toContain('First name');
  }));

 it('TEST a Form Group ELEMENT COUNT', () => {
  const formElement = fixture.debugElement.nativeElement.querySelector('#registerForm');
  const inputElements = formElement.querySelector('input');
  expect(inputElements.length).toEqual(5);
 })
  
});
