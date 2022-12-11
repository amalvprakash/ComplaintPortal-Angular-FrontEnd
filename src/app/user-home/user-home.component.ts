import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  complaint = ""

  constructor(private api:ApiService){}

  Submit = ()=>{
    let data:any = {
      "userId": localStorage.getItem("userInfo"),
      "complaint":this.complaint
    }
    this.api.Complaint(data).subscribe(
      (response:any) =>{
        if (response.status="success") {
          alert("Complaint Added")
          this.complaint = ""
        } else {
          alert("Something went wrong!!")
        }
      }
    )
  }

}
