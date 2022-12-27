import { Component ,OnInit,Input,Output,EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteserviceService } from 'src/app/services/Notes/noteservice.service';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit{
  @Input() notecard: any;
  @Output() refreshcolor=new EventEmitter<any>();
  @Output() archiverefresh=new EventEmitter<any>();
  @Output() trashrefresh=new EventEmitter<any>();
  
  noteID: any;
  isArchieve: boolean = false;
  isDeleted: boolean = false;
  // colorarray = ["","","","","","","","","","","",""]
  colorarray = [{ Colorcode: "#2ECC71" }, 
  { Colorcode: "#AF7AC5" }, 
  { Colorcode: "#F1948A" },
   { Colorcode: "#A3E4D7" }, 
   { Colorcode: "#F5B7B1" }, 
   { Colorcode: "#F5B041" },
    { Colorcode: "#DC7633" }, 
    { Colorcode: "#F1C40F" }, 
    { Colorcode: "#AAB7B8" }, 
    { Colorcode: "#F1948A" }, 
   { Colorcode: "#2ECC71" },
    { Colorcode: "#F5B041" }];
  constructor(private note: NoteserviceService,private activatedroute:ActivatedRoute) { }
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
      this.archiverefresh.emit(result);
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
      this.trashrefresh.emit(result);
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
      this.refreshcolor.emit(result)
      console.log('color changed',result)
    })

  }

  restorenote(){
    let data = {
      noteIdList: [this.notecard.id],
      isDeleted: false,
    }
    this.note.trashnote(data).subscribe((result: any) => {
      console.log('note restored',result)
    })
  }
  deleteforevernote(){
    let data ={
      noteIdList: [this.notecard.id],
      isDeleted: true,
    }
    this.note.deleteforever(data).subscribe((result: any) => {
      
      console.log('note deleted forever',result)
      
    })
  }

  unArchive(){
    let data = {
      noteIdList: [this.notecard.id],
      isArchived: false,
    }
    this.note.archivenote(data).subscribe((result:any)=>{
     
      console.log('note unarchived successfully',result); 
    })

  }
}
