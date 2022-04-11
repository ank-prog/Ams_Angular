import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';

const routes: Routes = [
  { path: '', component: DashboardLayoutComponent, 
  children:[
    { path: '', redirectTo:'raiserequest',pathMatch:'full'},
    { path: 'requests', loadChildren: ()=> import('../requests/requests.module').then((m)=> m.RequestsModule)},
    { path: 'raiserequest', loadChildren:()=>import('../raiserequest/raiserequest.module').then((m)=>m.RaiserequestModule)},
    {path:'raiserequest',loadChildren:()=>import('../raiserequest/raiserequest.module').then((m)=>m.RaiserequestModule)},
    { path: 'dispatch', loadChildren: () => import('../dispatch-information/dispatch-information.module').then(m => m.DispatchInformationModule) }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardLayoutRoutingModule { }
