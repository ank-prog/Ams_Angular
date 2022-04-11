import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispatchInformationComponent } from './dispatch-information.component';

const routes: Routes = [{ path: '', component: DispatchInformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchInformationRoutingModule { }
