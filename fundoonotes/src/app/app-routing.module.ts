import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotemailComponent } from './components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path:'signin', component:LoginComponent},
  {path:'signup', component:SignComponent},
  {path:'fpwd', component:ForgotpasswordComponent},
  {path:'fmail', component:ForgotemailComponent},
  {path:'icons', component:IconsComponent},
  {path:'Dashboard', component:DashboardComponent,
    children:[
      {path:'Notes', component:GetAllNotesComponent},
      {path:'Archive',component:ArchiveComponent},
      {path:'Trash', component:TrashComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
