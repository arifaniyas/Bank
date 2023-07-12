import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data="happy Banking with Us"
pdata="enter the  account number"
acno:any=""
login(){
  alert("login clicked")
}

acnoChange(event:any){
  this.acno=event.target.value;

console.log(event);

}

pwdChange(event:any){
  console.log(
  (event.target.value))

}
}

