import { Component,OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/Notes/noteservice.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  noteList:any;
  constructor(private note:NoteserviceService) { }

  ngOnInit(): void {
    this.archieveNote()
  }
  archieveNote(){
    this.note.get().subscribe((result:any)=>{
      this.noteList=result.data.data;
      this.noteList=this.noteList.filter((k:any)=>{
        return k.isArchived==true;
      })
      console.log(this.noteList);
    })
  }
  
}
  


