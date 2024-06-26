import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent implements OnInit{
 
  activedLoader = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.activedLoader = false;
    }, 2300); 
    window.scrollTo(0, 0); 

  }
}
