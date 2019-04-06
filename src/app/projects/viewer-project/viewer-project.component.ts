import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';

@Component({
  selector: 'rgl-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.scss']
})
export class ViewerProjectComponent implements OnInit {

  projects: Project[];
  id: number;
  project: Project;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projects = environment.projects;
    this.id = this.activatedRoute.snapshot.params.id;
// tslint:disable-next-line: triple-equals
    this.project = this.projects.find((pro: Project) => pro.id == this.id);
  }

}
