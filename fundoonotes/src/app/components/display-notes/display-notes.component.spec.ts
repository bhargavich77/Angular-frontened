import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialogModule} from '@angular/material/dialog';
import { FilterpipePipe } from 'src/app/filterpipe.pipe';

import { DisplayNotesComponent } from './display-notes.component';

describe('DisplayNotesComponent', () => {
  let component: DisplayNotesComponent;
  let fixture: ComponentFixture<DisplayNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNotesComponent,FilterpipePipe
       ],
       imports:[MatDialogModule,HttpClientModule,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
