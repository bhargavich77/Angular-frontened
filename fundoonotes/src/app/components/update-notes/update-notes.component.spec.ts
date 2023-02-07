import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UpdateNotesComponent } from './update-notes.component';

describe('UpdateNotesComponent', () => {
  let component: UpdateNotesComponent;
  let fixture: ComponentFixture<UpdateNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNotesComponent ],
      imports:[HttpClientModule,MatDialogModule,],
      schemas: [NO_ERRORS_SCHEMA],
      providers:[{ 
        provide: MatDialogRef,
        useValue: []
         }, 
        { 
        provide: MAT_DIALOG_DATA, 
        useValue: [] 
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
