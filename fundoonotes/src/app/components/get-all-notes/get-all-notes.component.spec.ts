import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FilterpipePipe } from 'src/app/filterpipe.pipe';
import { CreateNotesComponent } from '../create-notes/create-notes.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';

import { GetAllNotesComponent } from './get-all-notes.component';

describe('GetAllNotesComponent', () => {
  let component: GetAllNotesComponent;
  let fixture: ComponentFixture<GetAllNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllNotesComponent,CreateNotesComponent,DisplayNotesComponent,FilterpipePipe],
      imports:[HttpClientModule,FormsModule,ReactiveFormsModule,MatSnackBarModule,MatDialogModule,MatCardModule,MatFormFieldModule],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
