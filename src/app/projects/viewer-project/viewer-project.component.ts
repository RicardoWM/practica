import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project.model';

@Component({
  selector: 'rgl-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.scss']
})
export class ViewerProjectComponent implements OnInit {

  id: number;
  project: Project;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectsService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.project = this.projectService.SelectProject(this.id);
  }

}
