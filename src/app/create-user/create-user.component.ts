import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './models/user-model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm : FormGroup;
  user : User;

  constructor(private formBuilder: FormBuilder,
             private router: Router,
             private httpClient: HttpClient) { }

  ngOnInit() {
    this.initForm();
  }
   initForm(){
  this.userForm = this.formBuilder.group({
     name:['', Validators.required],
     passeword:['', Validators.required],
     mail:['', Validators.required]
  });
  } 

  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser = new User(
       formValue['name'],
       formValue['passeword'],
       formValue['mail']
    );
    this.httpClient.post("http://localhost:3000/user/new", newUser)
    .subscribe(
      ()=> {
        console.log("user créer");
        this.router.navigate(['accueil']);
      },
      (err) =>{
        console.log("Error");
      }
    )
  }



}
