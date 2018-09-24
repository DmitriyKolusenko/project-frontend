import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.css'],
  
})
export class AutorizationComponent  {
  authStatus:boolean = true;
  @Output() statusUpdated = new EventEmitter<boolean>(
  );
  btnClick(){
    this.authStatus = true;
    this.statusUpdated.emit(this.authStatus);
  }
 
  
}
