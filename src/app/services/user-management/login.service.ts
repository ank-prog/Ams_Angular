import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly baseUrl = environment.baseUrl;




    constructor(private http:HttpClient) { }

    signIn(credential:any){
    return this.http.post(this.baseUrl+'Authentication/signin', credential);
  }
  RaiseRequest(credential:any){
    console.log(credential);
    var result= this.http.post(this.baseUrl+'Request/raiserequests',credential)
    return result;
  }
}
