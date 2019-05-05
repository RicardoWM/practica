import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterProjectsFormComponent } from './filter-projects-form/filter-projects-form.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ViewerProjectFormComponent } from './viewer-project-form/viewer-project-form.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';
import { ProjectsService } from './projects.service';
import { AuditInterceptorService } from '../notifications/audit-interceptor.service';



@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    DashboardComponent,
    FilterProjectsFormComponent,
    ProjectsListComponent,
    ViewerProjectFormComponent,
    NewProjectFormComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuditInterceptorService,
    multi: true
    },
    ProjectsService
  ]
})
export class ProjectsModule { }
