import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteserviceService } from 'src/app/services/Notes/noteservice.service';
@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit{
  NoteForm!: FormGroup;
  submitted = false;
  show=false;
  isShow:boolean=false;
  searchValue:any;
  error:boolean=false;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder,private note:NoteserviceService,private snackbar: MatSnackBar) { }

  ngOnInit() {
      this.NoteForm = this.formBuilder.group({
          
          Title: ['', ],
          Description: ['', ],
         
          
      });
  }
  Show(){
    this.isShow=true;
  }
  close():void{
    this.show=false;
    console.log('valid data',this.NoteForm.value);
    console.log('note created');
    // window.location.reload(); 
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.NoteForm.invalid) {
        return;
    }else{
      console.log("Note is valid",this.NoteForm.value)
      let notedata={
        title:this.NoteForm.value.Title,
        description:this.NoteForm.value.Description,
       
      }
      this.note.add(notedata).subscribe((res:any)=>{
        console.log(res);
        this.messageEvent.emit(res);
        this.NoteForm.reset();
        
      },
      error => {
        this.error = error;
        // this.submitted = false;
      })
     
    }

    
    
}

}
