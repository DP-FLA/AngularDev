import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestpageComponent } from './testpage/testpage.component';
import { MaterialModule } from './material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskAddComponent, DialogOverviewExampleDialog } from './task-add/task-add.component';

@NgModule({
  declarations: [AppComponent, TestpageComponent, TaskViewComponent, TaskAddComponent, DialogOverviewExampleDialog],
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
