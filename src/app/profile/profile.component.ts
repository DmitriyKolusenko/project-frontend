import { Component } from '@angular/core';
import { AuthorizationService } from '../autorization/autorization.service';
import { Client } from '../clients/client.model';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  
})
export class ProfileComponent  {

  constructor (private _appComponent: AppComponent, private router: Router){}

  get profile(): Client{
    return this._appComponent.profile;
  }
  
  public logOut(): void {
    this._appComponent._authData = null;
    this._appComponent.authStatus = false;
    this.router.navigate(['/autorization'])
  }
}
