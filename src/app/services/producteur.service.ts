import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Produit } from '../model/Produit.model';

@Injectable({ providedIn: 'root' })
export class ProducteurService {
    constructor(private authService: AuthService, private http: HttpClient) { }

    produits():Observable<Produit[]> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.get<Produit[]>(`${environment.apiUrl}/producteur/produits`, {headers: httpHeaders});
    }

    addproduit(prod: Produit):Observable<Produit> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.post<Produit>(`${environment.apiUrl}/producteur/produit`, prod, {headers: httpHeaders});
    }

    updateProduit(id: number) {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.put<Produit>(`${environment.apiUrl}/producteur/produit/${id}`, {headers: httpHeaders});
    }

    deleteProduit(id: number) {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.delete<Produit>(`${environment.apiUrl}/producteur/produit/${id}`, {headers: httpHeaders});
    }

}