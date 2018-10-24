import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthData } from './autorization.model';
import { LoginID } from './loginId.model';
import { Client } from '../clients/client.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public loginId: Observable<[LoginID,Client]>;
  public currentUser: [LoginID, Client];
//  public str: string;
//  public authStatus:boolean = false;
  constructor(private http: HttpClient) { }

  public login(authData: AuthData): Observable<[LoginID,Client]> {
    let that = this;
    this.loginId = this.http.post<[LoginID,Client]>('http://localhost:8080/login',{
      userName:  authData.userName,
      password:  authData.password
    })
    // .pipe(
    //   map(r => {
    //     that.currentUser = r;
    //     return r;
    //   })
    // )
    return this.loginId;
  }
}
