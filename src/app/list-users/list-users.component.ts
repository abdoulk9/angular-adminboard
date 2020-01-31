import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../services/user.services';
import { Subscription } from 'rxjs';
import { User } from 'src/services/user-model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})

export class ListUsersComponent implements OnInit {

  users: User[];
  userSubscription: Subscription;

  constructor(private router: Router,
    private httpClient: HttpClient,
    private usersService: UsersService) { }

  ngOnInit() {
    console.log("entrer dans ngOnint");
    this.httpClient.get("http://localhost:3000/user/")
      .subscribe(
        (data: User[]) => {
          console.log(data);
          this.users = (data);
          this.usersService.emitUsers();
          console.log(this.users);
          console.log("données recuperées");
        },
        (err) => {
          console.log('erreur');
        }
      )
  }

   onViewUser(id: number){
     this.router.navigate(['/user', 'view', id]);
   }

   onDeleteUser(id: number){
     console.log("dans la function ondele..., l'id est: " + id);
     this.router.navigate(['/user', 'delete', id]);
   }

  /*ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
*/
}
