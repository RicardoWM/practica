import { NewProjectComponent } from './new-project/new-project.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'project/:id',
    component: ViewerProjectComponent
  },
  {
    path: 'new',
    component: NewProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
