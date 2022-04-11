import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  email = new FormControl('', [Validators.required, Validators.maxLength(10)]);

  userGroup:FormGroup;


  constructor(private fb: FormBuilder) { 
    this.userGroup = this.fb.group(
      {
        name:this.name, 
        email:this.email
      }
        );
   }

  ngOnInit(): void {
  }

  createUser(userGroupData:FormGroup)
  {
    console.log(userGroupData);
  }

}
