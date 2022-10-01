import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CamundaFormComponent } from './camundaform/camundaform.component';

import { environment } from './../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache,ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('token');

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `JWT ${environment.CAMUNDA_AUTH_TOKEN}`
        }
      };
    }
  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri: 'https://dsm-1.tasklist.camunda.io/daae4980-e22b-4299-b78f-308ec8ffbab2/graphql' })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CamundaFormComponent],
  bootstrap: [AppComponent],
  exports: [
    HttpClientModule,
    ApolloModule,
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink]
  }]
})
export class AppModule {}
