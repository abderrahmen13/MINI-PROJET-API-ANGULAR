import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Reservation } from '../model/Reservation.model';

@Injectable({ providedIn: 'root' })
export class ConsommateurService {
    constructor(private authService: AuthService, private http: HttpClient) { }

    producteurs(ville: String):Observable<User[]> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.post<User[]>(`${environment.apiUrl}/consommateur/producteurs`, ville, {headers: httpHeaders});
    }

    reserver(data: any) {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt});
        return this.http.post<Reservation>(`${environment.apiUrl}/consommateur/reserver`, data, {headers: httpHeaders});
    }

}