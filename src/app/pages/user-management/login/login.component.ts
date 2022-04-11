import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/user-management/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
userData:any;
  userId =  new FormControl('',[ Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]);
  password = new FormControl('', Validators.required);

  logInForm : FormGroup;

  constructor(private fb: FormBuilder, private loginService : LoginService, private route: Router) {
    this.logInForm=this.fb.group({userId: this.userId, password: this.password});
   }
  ngOnInit(): void {
  }

  signIn(loginData : FormGroup){
    console.log("Sign In");
    var credentials =
   {
      "UserId":0,
      "emailId": loginData.get('userId')?.value,
      "password": loginData.get('password')?.value,
      "Role":{"roleId": 0,
      "roleName": "string"
    },
    "firstName": "",
    "middleName": "",
    "lastName": "",
    "profilePhoto": "",
    "contactNo": "",
    "isActive": false,
    "rmId": 0
    };
    this.loginService.signIn(credentials).subscribe((res:any)=>{
      if(res?.userId > 0)
      {
        this.userData=res;
        console.log(res);
        this.route.navigate(['/dashboardlayout']);
      }
      else alert("Invalid Email or Password");
    });
  }

}
