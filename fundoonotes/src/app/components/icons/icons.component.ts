import { Component ,OnInit,Input} from '@angular/core';
import { NoteserviceService } from 'src/app/services/Notes/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit{
  @Input() notecard: any;
  noteID: any;
  // isArchieve: boolean = false;
  // isDeleted: boolean = false;
  colorarray = ["#2ECC71","#AF7AC5","#F1948A","#A3E4D7","#F5B7B1","#F5B041","#DC7633","#F1C40F","#AAB7B8","#F1948A","#2ECC71","#F5B041"]
  constructor(private note: NoteserviceService) { }
  ngOnInit(): void {
    
  }
  archive(){
    let data = {
      noteIdList: [this.notecard.id],
      isArchived: true,
    }
    console.log(data);
    this.note.archivenote(data).subscribe((result:any)=>{
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
      console.log('color changed',result)
    })

  }
}
