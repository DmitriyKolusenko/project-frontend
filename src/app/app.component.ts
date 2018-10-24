import { Component, Input, Injectable, OnInit } from '@angular/core';
import {AutorizationComponent} from './autorization/autorization.component'
import { Observable } from 'rxjs';
import { Client } from './clients/client.model';
import { AuthorizationService } from './autorization/autorization.service';
import { LoginID } from './autorization/loginId.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthorizationService]
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'TS-Shop';
  public _authData: [LoginID, Client];
  public authStatus: boolean = false;
  constructor(private authorizationService: AuthorizationService, private router: Router){  
  }

  ngOnInit(): void { 
  //  this.addStatus = this.authorizationSerice.authStatus
  
  }

  public authLogin(): void{
    let that = this;
    this.authorizationService.loginId.subscribe(
      (authData: [LoginID, Client]) => {
        //that._authData = this.authorizationService.currentUser;
        that._authData = authData;
        that.authStatus = true;
        that.router.navigate(['/profile']);
      },
      (error) => {
        console.log(error);
      }
      )
  }

  public hasRole(role: string): boolean {
     
    return this._authData[1].roles == role;
  }
  
  get addStatus(): boolean {
    return this.authStatus;
  }

  get sessionId(): string{
    return this._authData[0].sessionId;
  }

  get profile(): Client{
    return this._authData[1];
  }
}
