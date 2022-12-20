import { Component ,Inject, OnInit,EventEmitter,Output} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/Notes/noteservice.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  Title:any;
  Description:any;
  noteId:any;
  @Output() updaterefresh=new EventEmitter<any>();
  constructor(private notes:NoteserviceService,
    public dialogRef: MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
ngOnInit():void{
  console.log(this.data,this.data.noteId);
  this.Title=this.data.title;
  this.Description=this.data.description;
}
  onNoClick(): void {
    console.log(this.Title,this.Description);
    let data={
      noteId:this.data.id,
      title:this.Title,
      description:this.Description,
    }
    this.notes.updatenote(data).subscribe((response:any)=>{
      console.log(response);
      this.updaterefresh.emit(response);
      
    })
    this.dialogRef.close();
  }
  updatenoteRefresh(event:any){
    this.updaterefresh.emit(event)
   }
 
}
