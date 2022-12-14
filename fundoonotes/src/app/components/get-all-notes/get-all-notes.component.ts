import { Component, OnInit } from '@angular/core';

import { NoteserviceService } from 'src/app/services/Notes/noteservice.service';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  Notesdata:any;
  constructor(
    
    private note: NoteserviceService
  ) {}

  ngOnInit() {
    this.getAllNotes();
  }
  getAllNotes() {
    this.note.get().subscribe((res: any) => {
      console.log(res);
      this.Notesdata=res.data.data;
      console.log(this.Notesdata);
     
    });
  }

  
}
