import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';

import { CourseViewComponent } from './course-view.component';
import { CourseAddEditComponent } from './course-add-edit.component';

@NgModule({
  declarations: [
    CourseViewComponent,
    CourseAddEditComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
