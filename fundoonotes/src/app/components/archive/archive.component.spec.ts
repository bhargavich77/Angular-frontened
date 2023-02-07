import { HttpClientModule } from '@angular/common/http';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FilterpipePipe } from 'src/app/filterpipe.pipe';

import { DisplayNotesComponent } from '../display-notes/display-notes.component';

import { ArchiveComponent } from './archive.component';

describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveComponent,DisplayNotesComponent,FilterpipePipe],
      imports: [HttpClientModule,MatDialogModule,],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
