import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  readonly request = environment.RequestAPIurl+'raiserequests/';
readonly asset=environment.assetAPIurl+'getcategory';
readonly getassetType=environment.assetAPIurl+'GetAssetType?id=';

  constructor(private http:HttpClient) { }

  getRequests(){
    return this.http.get(this.request);
  }
getAssetsCategory(){
  return this.http.get(this.asset);
}
 getAssetsCategoryType(id:any){
   return this.http.get(this.getassetType+id);
 }
 getRequestList(){
   return this.http.get(environment.assetAPIurl+'getrequests/')
 }
//  raiseRequest(form f){

//  }
}
