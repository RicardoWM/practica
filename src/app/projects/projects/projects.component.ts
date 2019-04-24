import { ProjectsService } from './../projects.service';
import { Project } from './../project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rgl-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    public projectService: ProjectsService
  ) { }

  ngOnInit() {
    this.projectService.getProjects();
  }

}
