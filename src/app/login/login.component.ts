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
psw:string=""
login(a:any,b:any){
  //alert("login clicked")
  // console.log(a.value);
  // console.log(b.value);
  this.acno=a.value
  this.psw=b.value
  console.log(this.acno);
  console.log(this.psw);
  
  
  
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

