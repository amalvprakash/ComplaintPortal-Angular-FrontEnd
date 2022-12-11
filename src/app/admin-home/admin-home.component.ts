import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  userData:any = []
  constructor(private api:ApiService){

    this.api.ViewAll().subscribe(
      (response)=>{
        this.userData = response
        console.log(this.userData)
      }

    )

    }
  }

