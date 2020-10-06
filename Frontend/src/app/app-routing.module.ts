import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestpageComponent } from './testpage/testpage.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'rtest', component: AppComponent },
  { path: 'test', component: TestpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
