import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../../services/user-model';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;
  userInfo: User[] = [];
  idUser: any;



  constructor(private router: Router,
    private httpClient: HttpClient,
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }
//Récuperation des données de l'utilisateur
  ngOnInit() {
    this.idUser = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.idUser);
    this.httpClient.get("http://localhost:3000/user/" + this.idUser)
      .subscribe(
        (data: User[]) => {
          this.userInfo = data || this.userInfo;
          console.log(this.userInfo);
        },
        err => console.log("User non récuperer")
      );
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      passeword: ['', Validators.required],
      mail: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newInfoUser = new User(
      formValue['name'],
      formValue['passeword'],
      formValue['mail']
    );
    if (this.idUser !== 0) {
      console.log(" id !== 0 : " + this.idUser);
      this.httpClient.put("http://localhost:3000/user/" + this.idUser, newInfoUser)
        .subscribe(
          () => {
            this.router.navigate(['users']);
          }, (err) => {
            console.log("Update falled");
          }
        );
    } else {
      this.httpClient.post('http://localhost:3000/user/', this.userInfo)
        .subscribe(
          () => {
            console.log("l'info ancienne: " + this.userInfo);
            this.router.navigate(['users']);
          });
    }
  }
  goBack(){
    this.router.navigate(['users']);
  }

}
