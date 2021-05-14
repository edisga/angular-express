import { Injectable } from '@angular/core';
import { User } from './user';
import { Userdetails } from './userdetails';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLogged: boolean = false;

  constructor(private http: HttpClient) { 
    
  }

  
  public signIn(userData: User){
    
    this.http.post<Userdetails>('http://localhost:3000/api/user', { email: userData.email, password: userData.password }).subscribe({
      next: data => {
          console.log ("id ", data.id);
          console.log ("name ", data.name);
          this.isLogged = true;
      },
      error: error => {
          console.error('There was an error!', error);
      }
    });
      localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}