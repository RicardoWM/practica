import { Project } from './../project.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rgl-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  @Input() public projects: Project[];

  constructor() { }
  displayedColumns: string[] = ['Project'];

  ngOnInit() {
  }

}
