import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
    
  }
  Register = (dataToSend:any) => {
    return this.http.post("http://localhost:8080/userReg",dataToSend)
  }
  UserLogin = (dataToSend:any) => {
    return this.http.post("http://localhost:8080/userLogin",dataToSend)
  }
  Profile= (dataToSend:any) => {
    return this.http.post("http://localhost:8080/profile",dataToSend)
  }
  Complaint= (dataToSend:any) => {
    return this.http.post("http://localhost:8080/complaint",dataToSend)
  }
  ViewComplaints= (dataToSend:any) => {
    return this.http.post("http://localhost:8080/viewComplaints",dataToSend)
  }
  ViewAll= () => {
    return this.http.get("http://localhost:8080/viewAllComplaints")
  }

}
