import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-tech',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-tech.component.html',
  styleUrl: './blog-tech.component.css'
})
export class BlogTechComponent implements OnInit{

  activedLoader = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.activedLoader = false;
    }, 2300); 
    window.scrollTo(0, 0); 
  }

}
