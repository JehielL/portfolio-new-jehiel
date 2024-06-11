import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-chef',
  standalone: true,
  imports: [],
  templateUrl: './timeline-chef.component.html',
  styleUrl: './timeline-chef.component.css'
})
export class TimelineChefComponent implements OnInit {
  activedLoader = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.activedLoader = false;
    }, 2300); 
    window.scrollTo(0, 0); 
  }
  
 
}

