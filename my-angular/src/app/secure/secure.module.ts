import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';

import { DashComponent } from './dash.component';

import { CoursesModule } from "./courses/courses.module";
import { NotificationsModule } from "./notifications/notifications.module";

@NgModule({
  declarations: [
    DashComponent,
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    CoursesModule,
    NotificationsModule
  ]
})
export class SecureModule { }
