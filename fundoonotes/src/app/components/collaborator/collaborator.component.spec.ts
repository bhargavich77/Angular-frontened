import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CollaboratorComponent } from './collaborator.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

describe('CollaboratorComponent', () => {
  let component: CollaboratorComponent;
  let fixture: ComponentFixture<CollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorComponent ],
      imports:[HttpClientModule,MatDialogModule,MatCardModule,MatMenuModule],
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

    fixture = TestBed.createComponent(CollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
