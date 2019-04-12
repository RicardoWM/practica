import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterProjectsFormComponent } from './filter-projects-form/filter-projects-form.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ViewerProjectFormComponent } from './viewer-project-form/viewer-project-form.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerProjectComponent, NewProjectComponent, DashboardComponent, FilterProjectsFormComponent, ProjectsListComponent, ViewerProjectFormComponent, NewProjectFormComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
