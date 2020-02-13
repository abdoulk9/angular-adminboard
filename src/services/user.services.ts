import { User } from './user-model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsersService {


    usersSubject = new Subject<any[]>();
    private  usersList: User[]=[];

   constructor(private httpClient: HttpClient){} 

    emitUsersSubject(){
        this.usersSubject.next(this.usersList.slice());
    }

    getUsers(){
        this.httpClient.get("http://localhost:3000/user/")
        .subscribe(
            (data : User[]) =>{
                this.usersList = data;
                console.log("Liste des users");
                console.log(this.usersList);
            },
            (err) =>{
                console.log('Erreur rencontrée!');
                 }
        )
        this.emitUsersSubject();
}

}