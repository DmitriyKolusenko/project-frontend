import { Component, Input, Injectable, OnInit } from '@angular/core';
import {AutorizationComponent} from './autorization/autorization.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AutorizationComponent]
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'TS-Shop';
  addStatus:boolean
  constructor(private autorizationComponent: AutorizationComponent){
    
  }

  ngOnInit(): void {
    this.autorizationComponent.statusUpdated.subscribe(
      (addStatus) => {
        alert(addStatus)
      }
    )
    //this.addStatus = this.autorizationComponent.authStatus
  }
  
}
