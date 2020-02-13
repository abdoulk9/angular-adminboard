import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersService } from '../services/user.services';
import { SingleUserComponent } from './single-user/single-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule} from '@angular/material';

const appRoutes: Routes =[
   { path: 'users', component: ListUsersComponent },
   { path: 'user-new', component: CreateUserComponent},
   { path: 'user/view/:id', component: SingleUserComponent},
   { path: 'user/edit/:id', component: EditUserComponent},
   { path: 'user/delete/:id', component: DeleteUserComponent},
   { path: '', redirectTo: 'users', pathMatch: 'full'},
   { path: '**', redirectTo:'users'}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditUserComponent,
    HeaderComponent,
    ListUsersComponent,
    SingleUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
