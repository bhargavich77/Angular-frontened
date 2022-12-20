import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { ForgotemailComponent } from './components/forgotemail/forgotemail.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpdateNotesComponent } from './components/update-notes/update-notes.component';
import { AuthenticationGuard } from './authentication.guard';
const routes: Routes = [
  {path:'', redirectTo:"/signin",pathMatch:'full'},
  {path:'signin', component:LoginComponent},
  {path:'signup', component:SignComponent},
  {path:'fpwd', component:ForgotpasswordComponent},
  {path:'fmail', component:ForgotemailComponent},
  {path:'icons', component:IconsComponent},

  {path:'Dashboard', component:DashboardComponent,canActivate:[AuthenticationGuard],
    children:[
      {path:'Notes', component:GetAllNotesComponent},
      {path:'Archive',component:ArchiveComponent},
      {path:'Trash', component:TrashComponent},
      {path:'createnew' ,component:CreateNotesComponent},
      {path:'display', component:DisplayNotesComponent},
      {path:'icons',component:IconsComponent},
    ]},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
