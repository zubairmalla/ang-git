import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash.component';

const COURSES_ROUTES:Routes=[
  {
    path:'',
    loadChildren:()=>import('./courses/courses-routing.module').then((x)=>x.CoursesRoutingModule)
  }
]
const NOTIFICATIONS_ROUTES:Routes=[
  {
    path:'',
    loadChildren:()=>import('./notifications/notifications-routing.module').then((x)=>x.NotificationsRoutingModule)
  }
]

const routes: Routes = [
  {
    path:'',
    redirectTo:'dash',
    pathMatch:'full'
  },
  {
    path:'dash',
    component:DashComponent
  },
  {
    path:'course',
    children:COURSES_ROUTES,
  },
  {
    path:'notification',
    children:NOTIFICATIONS_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
