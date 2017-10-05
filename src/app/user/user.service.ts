import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService{
    currentUser: IUser
    loginUser(username: string, password: string){
        this.currentUser = {
            id: 1,
            firstName: 'John',
            lastName: 'Papa',
            userName: 'John Papa'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}