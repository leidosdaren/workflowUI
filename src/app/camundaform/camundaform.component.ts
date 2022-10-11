import { Component, OnInit } from '@angular/core';
import { CamundaService } from '../camunda.service';
import { FormQuery } from 'src/graphql/generated';
import { Observable } from 'rxjs';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import { FieldType } from '@ngx-formly/material';

const id = "userTaskForm_2r4pvtj";
const processDefinitionId = "2251799813734394";
  
@Component({
  selector: 'camundaform',

  templateUrl: './camundaform.component.html',
  styleUrls: ['../styles.scss']
})

export class CamundaFormComponent implements OnInit {
  
  constructor(private camundaService: CamundaService) {}
  form: FormGroup;
  model: Object;
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions;
  schema: any;
  camundaForm: Observable<FormQuery['form']>;
  components: any;
  jsonComponents: any;

  getSchema(schema: any) {
    console.log("in getSchema: " + schema);
    this.schema = schema;
    this.jsonComponents = JSON.parse(schema);
  }
  ngOnInit() {
    
    this.camundaForm = this.camundaService.getForm(id, processDefinitionId);
    this.camundaService.getForm(id, processDefinitionId).subscribe(form => this.getSchema(form.schema));
   
    this.form = new FormGroup({});
    this.model = { email: 'email@gmail.com' };
    this.options = {};
  this.fields  = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
  ];
  }
  onSubmit(model: Object) {
    alert(
      JSON.stringify(this.model, null, 4)
    );
  }
}
