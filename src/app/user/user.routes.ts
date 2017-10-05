import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const userRoutes: Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
]