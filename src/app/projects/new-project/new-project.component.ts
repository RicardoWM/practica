import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
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
    private router: Router
  ) { }

  ngOnInit() {
    this.name = '';
  }

  SaveProject() {
    this.project = {id: 0, name: this.name}
    const ids = environment.projects.map((p: Project) => p.id);
    this.project.id = Math.max(...ids) + 1;
    environment.projects.push(this.project);
    this.router.navigate(['/projects']);
  }

}
