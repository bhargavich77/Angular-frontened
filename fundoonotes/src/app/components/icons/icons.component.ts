import { Component ,OnInit,Input,Output,EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteserviceService } from 'src/app/services/Notes/noteservice.service';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { HttpService } from 'src/app/services/httpservice/http.service';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit{
  durationInSeconds = 5;
  @Input() notecard: any;
  // @Output() =new EventEmitter<any>();
  @Output() event=new EventEmitter<any>();
  noteID: any;
  isArchieve: boolean = false;
  isDeleted: boolean = false;
  // colorarray = ["","","","","","","","","","","",""]
  colorarray = [{ Colorcode: "#f28b82" }, 
  { Colorcode: "#fbbc04" }, 
  { Colorcode: "#fff475" },
   { Colorcode: "#ccff90" }, 
   { Colorcode: "#a7ffeb" }, 
   { Colorcode: "#cbf0f8" },
    { Colorcode: "#aecbfa" }, 
    { Colorcode: "#d7aefb" }, 
    { Colorcode: "#fdcfe8" }, 
    { Colorcode: "#e6c9a8" }, 
   { Colorcode: "#e8eaed" },
    { Colorcode: "#F5B041" }];
  constructor(private note: NoteserviceService,private activatedroute:ActivatedRoute, private snackBar:MatSnackBar,private http:HttpService) { }
  ngOnInit(): void {
    // console.log(this.notecard);
    let Component = this.activatedroute.snapshot.component;
    if (Component == TrashComponent) {
         this.isDeleted = true;
       }
   
       if (Component == ArchiveComponent) {
         this.isArchieve = true;
       }
    
  }
  archive(){
    console.log(this.notecard)
    let data = {
      noteIdList: [this.notecard.id],
      isArchived: true,
    }

    console.log(data);
    this.note.archivenote(data).subscribe((result:any)=>{
      this.event.emit(result);
      console.log('note archived successfully',result); 
      
    })
  }

  deleteNote() {
    let data = {
      noteIdList: [this.notecard.id],
      isDeleted: true,
    }
    console.log(data.noteIdList);
    console.log(data);

    this.note.trashnote(data).subscribe((result: any) => {
      this.event.emit(result);
      console.log('note deleted',result)
    })

  }
  colorupdate(colour:any){
    console.log(colour);
    let data={
      noteIdList:[this.notecard.id],
      color:colour
    }
    this.note.changecolor(data).subscribe((result:any)=>{
      this.event.emit(result)
      console.log('color changed',result)
    })

  }

  restorenote(){
    let data = {
      noteIdList: [this.notecard.id],
      isDeleted: false,
    }
    console.log(data)
    this.note.trashnote(data).subscribe((result: any) => {
      console.log(result)
      this.event.emit(result);
      console.log('note restored',result)
    })
  }
  deleteforevernote(){
    let data ={
      noteIdList: [this.notecard.id],
      isDeleted: true,
    
    }
    console.log(data)
    this.note.deleteforever(data).subscribe((result: any) => {
      console.log(result)
      this.event.emit(result);
      console.log('note deleted forever',result)
      
    })
  }

  unArchive():void{
    let data = {
      noteIdList: [this.notecard.id],
      isArchived: false,
    }
    this.note.archivenote(data).subscribe((result:any)=>{
    
      console.log('note unarchived successfully',result); 
      this.event.emit(result);
      console.log(result)
    })

  }
  openSnackBar(message:any,action:any){
    this.snackBar.open(message,action,{duration:this.durationInSeconds*1000});
    this.event.emit(message)
  }
  
}
