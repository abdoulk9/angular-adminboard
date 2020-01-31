import { User } from './user-model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class UsersService {

    usersList: User[]=[];

    usersSubject = new Subject<User[]>();

    emitUsers(){
        this.usersSubject.next(this.usersList.slice());
    }

}