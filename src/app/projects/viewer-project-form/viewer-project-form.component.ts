import { Project } from './../project.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rgl-viewer-project-form',
  templateUrl: './viewer-project-form.component.html',
  styleUrls: ['./viewer-project-form.component.scss']
})
export class ViewerProjectFormComponent implements OnInit {

  @Input() public project: Project;

  constructor() { }

  ngOnInit() {
  }

}
