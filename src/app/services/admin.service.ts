import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Categorie } from '../model/Categorie.model';

@Injectable({ providedIn: 'root' })
export class AdminService {
    constructor(private authService: AuthService, private http: HttpClient) { }

    consommateurs():Observable<User[]> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.get<User[]>(`${environment.apiUrl}/admin/consommateurs`, {headers: httpHeaders});
    }

    producteurs():Observable<User[]> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.get<User[]>(`${environment.apiUrl}/admin/producteurs`, {headers: httpHeaders});
    }

    categories():Observable<Categorie[]> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.get<Categorie[]>(`${environment.apiUrl}/admin/categories`, {headers: httpHeaders});
    }

    valide_producteur(id: number) {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.put(`${environment.apiUrl}/admin/valide_producteur/${id}`, {headers: httpHeaders});
    }

    addCategorie(categ: Categorie):Observable<Categorie> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.post<Categorie>(`${environment.apiUrl}/admin/categorie`, categ, {headers: httpHeaders});
    }

}