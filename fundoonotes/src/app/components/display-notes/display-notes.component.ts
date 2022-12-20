import { Component,Input,Output,EventEmitter } from '@angular/core';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent  {
  @Input() childMessage:any;
  @Output() refreshDisplay=new EventEmitter<any>();
  @Output() messagevent=new EventEmitter<any>();
  @Output() colorchange=new EventEmitter<any>();
  constructor(public dialog: MatDialog) {}

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
  notearchive(event:any){
    console.log(event);
    
    this.messagevent.emit(event)
  }
  iconautorefresh(event:any){
    console.log(event);   
    this.refreshDisplay.emit(event)
  }
  colorRefresh(event:any){
   this.colorchange.emit(event)
  }

}
