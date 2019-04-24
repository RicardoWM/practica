import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectsService } from '../../projects/projects.service';
import { Project } from '../../projects/project.model';

@Component({
  selector: 'rgl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[];

  constructor(
    public projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.projectsService.getProjects();
  }

}
