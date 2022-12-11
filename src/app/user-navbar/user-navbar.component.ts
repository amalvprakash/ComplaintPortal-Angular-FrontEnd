import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
  userId:any = ""
  userData:any = []

  constructor(private api:ApiService){
    this.userId = localStorage.getItem("userInfo")
    let data:any = {
      "id":this.userId
    }
    this.api.Profile(data).subscribe(
      (response:any) =>{
        console.log(response)
        this.userData = response
      }
      
    )
  }
}
