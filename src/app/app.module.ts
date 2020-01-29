import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersService } from './list-users/services/user.services';

const appRoutes: Routes =[
   { path: 'users', component: ListUsersComponent },
   { path: 'user-new', component: CreateUserComponent},
   { path: 'edit', component: EditUserComponent},
   { path: '', redirectTo: 'users', pathMatch: 'full'},
   { path: '**', redirectTo:'users'}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditUserComponent,
    HeaderComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
