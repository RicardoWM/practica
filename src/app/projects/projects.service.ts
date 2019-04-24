import { Project } from './project.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  private urlapi
    = 'https://api-base.herokuapp.com/api/pub/projects';
  public projects: Project[] = [];
  public projects$ = new BehaviorSubject<Project[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getProjects() {
    this.http.get(this.urlapi)
    .pipe(
      map((d: any) => {
        if (d) {
          delete d._id;
          delete d.owner;
        }
        return d;
      })
    ).subscribe((projects: Project[]) => {
      if (projects) {
        this.projects = projects;
        this.projects$.next(this.projects);
      }
    });
  }

  SelectProject(id: number): Project {
// tslint:disable-next-line: triple-equals
    return this.projects.find((pro: Project) => pro.id == id);
  }

  SaveProject(project: Project) {
    if (this.projects) {
      const ids = this.projects.map((p: Project) => p.id);
      project.id = Math.max(...ids) + 1;
    }
    this.projects.push(project);
    this.projects$.next(this.projects);
    return this.http.post(this.urlapi, project);
  }
}
