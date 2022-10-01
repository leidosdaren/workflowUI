import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CamundaFormComponent } from './camundaform/camundaform.component';

import { environment } from './../environments/environment';

console.log(environment.CAMUNDA_AUTH_TOKEN);

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CamundaFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
