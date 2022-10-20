import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CamundaFormComponent } from './camundaform/camundaform.component';

import { GraphQLModule } from './graphql.module';

import { HttpClientModule } from '@angular/common/http';
import { CamundaService } from './camunda.service';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { NgMaterialModule } from '../ngMaterial.module';

@NgModule({
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, FormlyModule.forRoot(), FormlyMaterialModule, GraphQLModule, NgMaterialModule],
  declarations: [AppComponent, CamundaFormComponent],
  bootstrap: [AppComponent],
  exports: [
    HttpClientModule,
  ],
  providers: [
  CamundaService]
})
export class AppModule {}
