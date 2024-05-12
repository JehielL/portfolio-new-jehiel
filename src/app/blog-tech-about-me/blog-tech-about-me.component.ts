import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-tech-about-me',
  standalone: true,
  imports: [],
  templateUrl: './blog-tech-about-me.component.html',
  styleUrl: './blog-tech-about-me.component.css'
})
export class BlogTechAboutMeComponent implements OnInit{

  activedLoader = true;
  ngOnInit(): void {

    setTimeout(() => {
      this.activedLoader = false;
    }, 2300); 
    window.scrollTo(0, 0); 
    
  }

}
