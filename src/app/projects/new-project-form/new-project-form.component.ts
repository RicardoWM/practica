import { Project } from './../project.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rgl-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.scss']
})
export class NewProjectFormComponent implements OnInit {

  public formGroup: FormGroup;
  @Input() public project: Project;
  @Output() public save = new EventEmitter<Project>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  SaveProject() {
    this.project.name = this.formGroup.get('name').value;
    this.save.emit(this.project);
  }

}
