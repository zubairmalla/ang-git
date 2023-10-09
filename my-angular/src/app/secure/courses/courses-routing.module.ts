import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseAddEditComponent } from './course-add-edit.component';
import { CourseViewComponent } from './course-view.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'view',
    pathMatch:'full',
  },
  {
    path:'view',
    component:CourseViewComponent
  },
  {
    path:'add',
    component:CourseAddEditComponent
  },
  {
    path:'edit/:courseId',
    component:CourseAddEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
