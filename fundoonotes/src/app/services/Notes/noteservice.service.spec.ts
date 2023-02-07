import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NoteserviceService } from './noteservice.service';

describe('NoteserviceService', () => {
  let service: NoteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,]
    });
    service = TestBed.inject(NoteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
