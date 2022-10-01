import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {map} from 'rxjs/operators';

/*
const id = "userTaskForm_2r4pvtj";
const processDefinitionId = "2251799813734394";
*/
const GET_FORM_QUERY = gql`
form (id: $id, processDefinitionId: $processDefinitionId) {
    id
    processDefinitionId
    schema
}
`;

@Injectable({
  providedIn: 'root',
})
export class CamundaService {

  constructor(private apollo: Apollo) { }

  getForm(id: String, processDefinitionId: String) : any {
    return this.apollo.watchQuery({
        query: GET_FORM_QUERY,
        variables: { id: id, processDefinitionId: processDefinitionId },
      }).valueChanges.pipe(map((result) => result.data.form));

  }

}