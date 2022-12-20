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
      this.Notesdata=this.Notesdata.reverse()
      this.Notesdata=this.Notesdata.filter((k:any)=>{
        return k.isArchived==false;
      })
      console.log(this.Notesdata);
     
    });
  }
  autocreatenote(event:any){
    console.log(event);
    this.getAllNotes();
  }
  autodispalay(event:any){
    console.log(event);
    
    this.getAllNotes();
  }
  autoarchive(event:any){
    console.log(event);
    this.getAllNotes();
  }
  iconrefresh(event:any){
    console.log(event);
    this.getAllNotes();
  }
 
  
}
