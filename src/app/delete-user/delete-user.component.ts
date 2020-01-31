import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/services/user-model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  userId : number;
  userForDelete: User[];

  constructor(private router: Router,
             private httpClient: HttpClient,
             private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.activateRoute.snapshot.params['id'];
    console.log( "suppression élément portant l'id n°: " +  this.userId);
    this.httpClient.delete("http://localhost:3000/user/" + this.userId)
    .subscribe(
      ( ) =>{
        console.log("L'élément avec l'id: " + this.userId + " a été supprimer");
        this.router.navigate(['users']);
      },
      err =>{console.log("Delete falled");
      this.router.navigate(['users']);
    }
    )
  }



}
