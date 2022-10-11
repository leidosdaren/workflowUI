import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {FormGQL, FormQuery, Form} from '../graphql/generated';

@Injectable({
  providedIn: 'root',
})
export class CamundaService {
  camundaForm: Observable<FormQuery['form']>
  //camundaForm: Observable<FormQuery>
  formSchema: string;
  
  constructor(private formGQL: FormGQL) {  }

  getForm(id: string, processDefinitionId: string) : Observable<FormQuery['form']> {
     
    this.camundaForm = this.formGQL.watch({id: id, processDefinitionId: processDefinitionId}).valueChanges.pipe(map(result => result.data.form));

    return this.camundaForm;

  }

}