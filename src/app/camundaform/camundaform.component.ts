import { Component, OnInit } from '@angular/core';

/*
export interface CamundaFormData {
  data: {
    form: {
      id: String;
      processDefinitionId: String;
      schema: String;
    };
  };
}
*/
/*
const formData =
  '{"data": { "form": { "id": "userTaskForm_2r4pvtj","processDefinitionId": "2251799813734394", "schema": "{\n  "components": [\n    {\n      "label": "Zipcode",\n      "type": "textfield",\n      "id": "Field_0hwzx7e",\n      "key": "field_zipcode",\n      "description": "Supply a zipcode",\n      "validate": {\n        "required": true,\n        "minLength": 5,\n        "maxLength": 5\n      }\n    }\n  ],\n  "schemaVersion": 4,\n  "exporter": {\n    "name": "Camunda Web Modeler",\n    "version": "fa04aaa"\n  },\n  "type": "default",\n  "id": "Form_6cfd03a7-9542-4f94-84a3-dc0800490846",\n  "executionPlatform": "Camunda Cloud",\n  "executionPlatformVersion": "1.3"\n}" } } }';
*/

type CamundaFormData = {
    id: String;
    processDefinitionId: String;
    schema: String;
  };


const formData =
  '{"id": "id", "processDefinitionId": "PDI", "schema": "schema"}';

@Component({
  selector: 'camundaform',
  templateUrl: './camundaform.component.html',
})
export class CamundaFormComponent implements OnInit {
  camundaFormJSON: CamundaFormData;

  ngOnInit() {
    console.log(formData);
    this.camundaFormJSON = JSON.parse(formData);
  }
}
