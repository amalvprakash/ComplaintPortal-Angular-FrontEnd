import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email = ""
  password = ""
  constructor(private api:ApiService, private route:Router){}
  Login = () =>{
    let data:any = {
      "email" : this.email,
      "password" :this.password
    }  
    this.api.UserLogin(data).subscribe(
      (response:any) =>{
        if(response.length == 0){
          alert("login failed")
          this.email = ""
          this.password = ""
        }else{          
          let userId = response.id
          localStorage.setItem("userInfo",userId)
          console.log(userId)
          this.route.navigate(["/userHome"])
        }
      }  
    )
  }
}
