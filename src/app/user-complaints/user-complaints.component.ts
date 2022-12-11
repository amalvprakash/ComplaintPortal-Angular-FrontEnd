import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-complaints',
  templateUrl: './user-complaints.component.html',
  styleUrls: ['./user-complaints.component.css']
})
export class UserComplaintsComponent {
  userData:any = []

  constructor(private api:ApiService){
 
    let data:any = {
      "userId":localStorage.getItem("userInfo")
    }
    this.api.ViewComplaints(data).subscribe(
      (response:any)=>{
        this.userData = response
      }
    )
  }

}
