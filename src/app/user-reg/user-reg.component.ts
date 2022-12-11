import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  name = ""
  address = ""
  phoneNumber = ""
  dob = ""
  email = ""
  password = "" 
  confirmPassword = ""
  constructor(private api:ApiService){
  }
  Reg=()=>{
    let data:any ={
      "name" :this.name ,
      "address":this.address,  
      "phoneNumber":this.phoneNumber,
      "dob" : this.dob,
      "email": this.email,
      "password":this.password,
      "confirmPassword":this.confirmPassword
    }
    if (this.password == this.confirmPassword) {
      this.api.Register(data).subscribe(
        (response:any)=>{
          console.log(response)
        }
      )
    } else {
      alert("Passwords Didn't Match!!!\ntry again!")
      this.password = ""
      this.confirmPassword =""
    }
   

  }
}
