import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email = ""
  password = ""
  
  constructor(private route:Router){}
  Login = () => {
    if (this.email == "admin" && this.password=="12345") {
      alert("login success")
      this.route.navigate(["/adminHome"])
    } else {
      alert("failed")
      this.email = ""
      this.password = ""
    }
   
  }



}
