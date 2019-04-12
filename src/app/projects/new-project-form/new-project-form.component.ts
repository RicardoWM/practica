import { Project } from './../project.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'rgl-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.scss']
})
export class NewProjectFormComponent implements OnInit {

  @Input() public project: Project;
  @Output() public save = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }

}
