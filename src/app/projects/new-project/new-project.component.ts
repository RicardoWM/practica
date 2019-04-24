import { ProjectsService } from './../projects.service';
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'rgl-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  project: Project;
  name: string;

  constructor(
    private router: Router,
    private projectService: ProjectsService
  ) { }

  ngOnInit() {
    this.project = {id: 0, name: ''};
  }

  SavePro(project: Project) {
    this.projectService.SaveProject(project).subscribe(
      () => this.router.navigate(['/projects'])
    );
  }

}
