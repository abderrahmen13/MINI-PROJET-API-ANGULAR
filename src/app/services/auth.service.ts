import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public loggedUser:string | undefined;
    public isloggedIn: Boolean = false;
    public roles!: string[];
    token: any;
    private helper = new JwtHelperService();
    
    constructor(private router: Router, private http: HttpClient) { }

    login(user: User) {
        return this.http.post<User>(`${environment.apiUrl}/login`, user, {observe:'response'});
    }

    saveToken(jwt: any) {
        localStorage.setItem('jwt', jwt);
        this.token= jwt;
        this.isloggedIn = true;
        this.decodeJWt();
    }

    decodeJWt() {
        if(this.token == undefined) return;
        const decodedToken = this.helper.decodeToken(this.token);
        this.roles = decodedToken.roles;
        this.loggedUser = decodedToken.sub;
    }

    loadToken() {
        this.token = localStorage.getItem('jwt');
        this.decodeJWt();
    }

    getToken():string {
        return this.token;
    }

    signIn(user :User){
      this.loggedUser = user.email;
      this.isloggedIn = true;
      this.roles = user.roles;
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }

    isTokenExpired(): Boolean {
        return this.helper.isTokenExpired(this.token);
    }

    isAdmin():Boolean{
      if (!this.roles) //this.roles== undefiened
         return false;
      return this.roles.indexOf('ROLE_ADMIN') >=0;
    }

    isProducteur():Boolean{
      if (!this.roles) //this.roles== undefiened
         return false;
      return this.roles.indexOf('ROLE_PRODUCTEUR') >=0;
    }

    isConsommateur():Boolean{
      if (!this.roles) //this.roles== undefiened
         return false;
      return this.roles.indexOf('ROLE_USER') >=0;
    }

    logout() { 
      this.isloggedIn= false;
      this.loggedUser = undefined;
      this.token = undefined;
      this.roles = [];
      localStorage.removeItem('jwt');
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      this.router.navigate(['/login']);
    }

    setLoggedUserFromLocalStorage(login : string) {
      this.loggedUser = login;
      this.isloggedIn = true;
      //this.getUserRoles(login);
    }

    /*getUserRoles(username :string){    
      this.users.forEach((curUser) => {
        if( curUser.username == username) {
            this.roles = curUser.roles;
        }
      });
    }*/

}