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

    updateCurrentUser(firstName: string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
    
    isAuthenticated() {
        return !!this.currentUser;
    }
}