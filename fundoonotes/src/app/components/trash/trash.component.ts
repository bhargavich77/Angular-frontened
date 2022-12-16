import { Component,OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/Notes/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashList:any;
  constructor(private note:NoteserviceService) { }

  ngOnInit(): void {
    this.trash()
  }
  trash(){
    this.note.get().subscribe((result:any)=>{
      this.trashList=result.data.data;
      this.trashList=this.trashList.filter((k:any)=>{
        return k.isDeleted== true;
      })
      console.log(this.trashList);
    })
  }
  
}
