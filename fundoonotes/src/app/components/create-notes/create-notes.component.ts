import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoteserviceService } from 'src/app/services/Notes/noteservice.service';
@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit{
  NoteForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private note:NoteserviceService) { }

  ngOnInit() {
      this.NoteForm = this.formBuilder.group({
          
          Title: ['', ],
          Description: ['', ],
         
          
      });
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
        description:this.NoteForm.value.description,
       
      }
      this.note.add(notedata).subscribe((res:any)=>{
        console.log(res);
      })
    }

    
    
}

}
