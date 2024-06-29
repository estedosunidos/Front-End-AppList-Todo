import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPagesComponent } from './pages/layout/layout-pages/layout-pages.component';
import { SidevarComponent } from './pages/sidevar/sidevar.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { ScheduleTaskComponent } from './pages/schedule-task/schedule-task.component';
import { TodoListRoutingModule } from './TodoList-routing.module';
import { EditTaskComponent } from './pages/Edit-Task/Edit-Task/Edit-Task.component';
import { AddTaskComponent } from './pages/add-Task/Add-Task/Add-Task.component';
import { MateriaModule } from '../materia/materia.module';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoComponent } from './components/Todo/Todo.component';


@NgModule({
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MateriaModule
  ],
  declarations: [
    LayoutPagesComponent,
    SidevarComponent,
    MainPagesComponent,
    ScheduleTaskComponent,
    EditTaskComponent,
    AddTaskComponent,
    CartComponent,
    ProfileComponent,
    TodoComponent

  ],

})
export class TodoListModule { }
