import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaiserequestRoutingModule } from './raiserequest-routing.module';
import { RaiserequestComponent } from './raiserequest.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from  '@angular/material/button';
import {MatSlideToggleModule} from  '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    RaiserequestComponent
  ],
  imports: [
    CommonModule,
    RaiserequestRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
MatSlideToggleModule
  ]
})
export class RaiserequestModule { }
