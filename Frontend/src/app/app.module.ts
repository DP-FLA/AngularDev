import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AppComponent } from './app-component' ;
// Task components
import { TaskViewComponent } from './task/task-view/task-view.component';
import { TaskAddComponent, DialogOverviewExampleDialog } from './task/task-add/task-add.component';
import { TaskEditComponent } from './task/task-edit/task-edit.component';
// Account components
import { AccountLoginComponent } from './account/account-login/account-login.component';
import { AccountRegistrationComponent } from './account/account-registration/account-registration.component';
import { AccountDeletionComponent } from './account/account-deletion/account-deletion.component';

@NgModule({
  declarations: [AppComponent, AccountLoginComponent, AccountRegistrationComponent, AccountDeletionComponent, TaskViewComponent, TaskAddComponent, DialogOverviewExampleDialog,TaskEditComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}