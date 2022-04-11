import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  menus = 
  [
    {menu: 'Home', link:'dashboardlayout/requests'},
    {menu: 'Request', link:'dashboardlayout/raiserequest', subMenus:['Raise Request']},
    {menu: 'Dispatch Information'},
    {menu: 'Reports'},
    {menu: 'Inventory', subMenus:['Assets']},
    {menu: 'Help & Support'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
