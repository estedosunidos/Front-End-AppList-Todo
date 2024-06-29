import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'TodoList',
    loadChildren:()=>import('./TodoList/TodoList.module').then((todoList)=>todoList.TodoListModule)
  },
  {
    path:'',
    redirectTo:'TodoList',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
