import { ProjectsService } from './../projects.service';
import { Project } from './../project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rgl-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit() {
    this.projects = this.projectService.projects;
  }

}
