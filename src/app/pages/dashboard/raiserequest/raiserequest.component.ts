import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request/request.service';
import { LoginService } from 'src/app/services/user-management/login.service';

@Component({
  selector: 'app-raiserequest',
  templateUrl: './raiserequest.component.html',
  styleUrls: ['./raiserequest.component.scss']
})
export class RaiserequestComponent implements OnInit {


  //for toggle
  isDisabled = true;

  allRequest: any;
  //for selecting asset category
  allAssetCategories: any;

  //for all assets
  allAssets: any;

  //for all requests
  allRequests: any;


  selectedCategory: any;
  assetCategory = new FormControl('', Validators.required);
  asset = new FormControl(' ', Validators.required);
  requestDate = new FormControl('', Validators.required);
  reason = new FormControl('', Validators.required);
  employeeId = new FormControl('', Validators.required);
  employeeName = new FormControl('', Validators.required);
  employeeDepartment = new FormControl('');
  requestForm: FormGroup;

  displayStyle = "none";

  constructor(private request: RequestService, private fb: FormBuilder, private http: HttpClient, private login: LoginService) {
    this.getRequests();
    this.requestForm = this.fb.group({ assetCategory: this.assetCategory, asset: this.asset, requestDate: this.requestDate, reason: this.reason, employeeId: this.employeeId, employeeName: this.employeeName, employeeDepartment: this.employeeDepartment });
    this.getAssetCategorydetails();
    this.getRequestlist();
  }

  ngOnInit(): void {
  }

  getRequests() {
    this.request.getRequests().subscribe((res: any) => {
      if (res?.length > 0) {
        this.allRequest = res;
        console.log(this.allRequest);
      }
    });

  }
  getAssetCategorydetails() {
    this.request.getAssetsCategory().subscribe((res: any) => {
      if (res?.length > 0) {
        this.allAssetCategories = res;
        console.log(this.allAssetCategories);
      }
    });
  }
  selectChangeHandler(event: any) {
    this.selectedCategory = event.target.value;
    console.log(this.selectedCategory);
    this.getAssetCategoryType(this.selectedCategory);
  }
  getAssetCategoryType(id: any) {
    console.log(id);
    this.request.getAssetsCategoryType(id).subscribe((res: any) => {
      console.log(res);
      if (res?.length > 0) {
        this.allAssets = res;
        console.log(this.allAssets);
      }

    })


  }
  getRequestlist() {
    this.request.getRequestList().subscribe((res: any) => {
      if (res?.length > 0) {
        this.allRequests = res;
        console.log(this.allRequests);
      }
    })
  }

  onChange(event: any) {
    this.isDisabled = !this.isDisabled;

  }

  raiseRequest(requestForm :FormGroup) {
    var raiseRequest = {
      "requestId": 0,
      "asset": {
        "assetId": requestForm.get('assetId')?.value,
        "assetName": "",
        "assetType": {
          "assetTypeId": 0,
          "assetTypeName": "",
          "assetCategory": {
            "assetCategoryId": 0,
            "assetCategoryName": requestForm.get('assetCategory')?.value
          }
        }
      },
      "requestedBy": {
        "userId": 7,
        "emailId": "string",
        "password": "string",
        "role": {
          "roleId": 0,
          "roleName": "string"
        },
        "firstName": "string",
        "middleName": "string",
        "lastName": "string",
        "profilePhoto": "string",
        "contactNo": "string",
        "isActive": true,
        "rmId": 0
      },
      "requestedOn": "2022-04-08T06:30:38.920Z",
      "reason": requestForm.get('reason')?.value,
      "expectedDate": requestForm.get('requestDate')?.value,
      "requestedFor": {
        "userId": 7,
        "emailId": "string",
        "password": "string",
        "role": {
          "roleId": 0,
          "roleName": "string"
        },
        "firstName": "string",
        "middleName": "string",
        "lastName": "string",
        "profilePhoto": "string",
        "contactNo": "string",
        "isActive": true,
        "rmId": 0
      },
      "status": {
        "statusId": 0,
        "statusName": "string"
      }
      
    }
    console.log(requestForm);
    
    this.login.RaiseRequest(requestForm).subscribe((res: any) => {
      if (res > 0) {
        alert("Requested added successfull");
        console.log(res);
      }
      else alert("Request not added");
    });
  }

  deleteRequest(request: any) {
    if (request.requestId > 0) {
      console.log(request.requestId);
    }
  }

  resetForm() {
    this.requestForm.reset();
    this.getRequests();
  }
}
