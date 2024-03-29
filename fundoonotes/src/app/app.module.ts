import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './components/sign/sign.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ForgotemailComponent } from './components/forgotemail/forgotemail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IconsComponent } from './components/icons/icons.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { UpdateNotesComponent } from './components/update-notes/update-notes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { AuthguardServiceService } from './authguard-service.service';
import { FilterpipePipe } from './filterpipe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HttpErrorInterceptor } from './http-error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    LoginComponent,
    
    ForgotpasswordComponent,
    ForgotemailComponent,
    DashboardComponent,
    IconsComponent,
    CreateNotesComponent,
    DisplayNotesComponent,
    GetAllNotesComponent,
    TrashComponent,
    ArchiveComponent,
    UpdateNotesComponent,
    FilterpipePipe,
    CollaboratorComponent,
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule,
    MatCardModule,
    Ng2SearchPipeModule ,
    MatSnackBarModule,
    DragDropModule,
    
    
    
    
   

  ],
  providers: [AuthguardServiceService,{
    provide: HTTP_INTERCEPTORS,

    useClass: HttpErrorInterceptor,

    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
