import { Component,Input,Output,EventEmitter,OnInit,OnDestroy } from '@angular/core';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NoteserviceService } from 'src/app/services/Notes/noteservice.service';
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit   {
  searchText:any;
  message:any;
  subscription:any;
  gridlist:any;
  
  @Input() childMessage:any;
  
  @Output() messagevent=new EventEmitter<any>();
  
  @Output() refreshmessage=new EventEmitter<any>();
  constructor(public dialog: MatDialog, private data:DataService,private note: NoteserviceService) {}
  ngOnInit() {
    this.data.store.subscribe(a=>this.gridlist=a)
    console.log(this.gridlist)
    this.data.currentMessage.subscribe(message =>{ this.message = message 
      console.log(this.message)})
    
    
  }
  
  

  openDialog(notes:any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width:'600px',
      height:'170px',
      data:notes,
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  

  recievemsg(event:any){
    console.log(event)
    this.refreshmessage.emit(event)  
  }
 
}
