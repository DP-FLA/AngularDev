import { NgModule } from '@angular/core';
import { AccountLoginComponent } from './account/account-login/account-login.component';
import { TaskViewComponent } from './task/task-view/task-view.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AccountLoginComponent },
  { path: 'list', component: TaskViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
