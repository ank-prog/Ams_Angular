import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispatchInformationRoutingModule } from './dispatch-information-routing.module';
import { DispatchInformationComponent } from './dispatch-information.component';


@NgModule({
  declarations: [
    DispatchInformationComponent
  ],
  imports: [
    CommonModule,
    DispatchInformationRoutingModule
  ]
})
export class DispatchInformationModule { }
