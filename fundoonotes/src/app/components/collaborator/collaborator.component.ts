import { Component, OnInit,Inject } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/Notes/noteservice.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit{
  fname:any;
  lname:any;
  email:any;
  listuser:any;
  emailchoose:any
  selectmail:any;
  id:any
  listarray:any

  // token:any;
  ngOnInit(): void {
    
  }
constructor(private note:NoteserviceService,public dialogRef: MatDialogRef<CollaboratorComponent>, @Inject(MAT_DIALOG_DATA) public data: any,){
  this.fname=localStorage.getItem('fname');
  this.lname=localStorage.getItem('lname');
  this.email=localStorage.getItem('email');
  this.listarray=data.collaborators
  
  // this.token=localStorage.getItem('token');
}
addCollab(){
  let data={
    firstName:this.emailchoose.firstName,
    lastName:this.emailchoose.lastName,
    email:this.emailchoose.email,
    userId:this.emailchoose.userId
  }
  console.log(this.data.id); 
  this.note.addCollab(this.data.id,data).subscribe((result:any)=>{
    console.log(result);
    // this.displayarray.push(data)
    
  })
}
searchuser(data:any){
let abcd={
  searchWord:(data.target.value)
}
this.note.searchuserlist(abcd).subscribe((res:any)=>{
  console.log(res);
  this.listuser=res.data.details;
})
}
choooseemail(collab:any){
  this.emailchoose=collab;
  this.selectmail=collab.email;
}
}
