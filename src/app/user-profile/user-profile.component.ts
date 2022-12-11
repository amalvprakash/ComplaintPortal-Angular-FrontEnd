import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userId:any = ""
  userData:any = []

  constructor(private api:ApiService){
    this.userId = localStorage.getItem("userInfo")
    let data:any = {
      "id":this.userId
      
    }
    console.log(this.userId)
    this.api.Profile(data).subscribe(
      (response:any) =>{
        console.log(response)
        this.userData = response
      }
      
    )
  }
}
