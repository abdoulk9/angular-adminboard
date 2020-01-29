import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../create-user/models/user-model';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

   user : User[] = [];

  constructor(private router: Router,
              private httpClient: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
    
    const id = this.route.snapshot.params['id'];
    this.httpClient.get("http://localhost:3000/user/" + id)
    .subscribe(
      ( data: User[]) =>{
        console.log(data);
        this.user = data; 
      },
      (err) =>{
        console.log("Données non récuperées!!");
      }
    )
  }

}
