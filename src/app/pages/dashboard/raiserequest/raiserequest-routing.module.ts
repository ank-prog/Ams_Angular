import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaiserequestComponent } from './raiserequest.component';

const routes: Routes = [{ path: '', component: RaiserequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaiserequestRoutingModule { }
