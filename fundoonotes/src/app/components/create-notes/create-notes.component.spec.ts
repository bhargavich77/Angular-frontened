import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CreateNotesComponent } from './create-notes.component';

describe('CreateNotesComponent', () => {
  let component: CreateNotesComponent;
  let fixture: ComponentFixture<CreateNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNotesComponent ],
      imports:[FormsModule,ReactiveFormsModule,HttpClientModule,MatSnackBarModule,MatCardModule,MatFormFieldModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
