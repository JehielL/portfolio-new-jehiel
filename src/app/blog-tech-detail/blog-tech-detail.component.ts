import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-tech-detail',
  standalone: true,
  imports: [],
  templateUrl: './blog-tech-detail.component.html',
  styleUrl: './blog-tech-detail.component.css'
})
export class BlogTechDetailComponent implements OnInit{

  activedLoader = true;
  ngOnInit(): void {

    setTimeout(() => {
      this.activedLoader = false;
    }, 2300); 
    window.scrollTo(0, 0); 
    
  }

}
