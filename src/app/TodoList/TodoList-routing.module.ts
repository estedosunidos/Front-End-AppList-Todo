import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutPagesComponent } from "./pages/layout/layout-pages/layout-pages.component";
import { MainPagesComponent } from "./pages/main-pages/main-pages.component";
import { ScheduleTaskComponent } from "./pages/schedule-task/schedule-task.component";




const route:Routes=[{
  path:'',
  component:LayoutPagesComponent,
  children:[
    {path:'Layaout',component:LayoutPagesComponent},
    {path:'Schedule-Task',component:ScheduleTaskComponent},
    {path:'**',redirectTo:'Layaout'},

  ]
}]
@NgModule({
  imports:[RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class TodoListRoutingModule {}
