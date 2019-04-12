import { environment } from 'src/environments/environment';
import { Project } from './project.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public projects: Project[] = environment.projects;

  constructor() { }

  SelectProject(id: number): Project {
// tslint:disable-next-line: triple-equals
    return this.projects.find((pro: Project) => pro.id == id);
  }

  SaveProject(project: Project) {
    const ids = environment.projects.map((p: Project) => p.id);
    project.id = Math.max(...ids) + 1;
    this.projects.push(project);
  }
}
