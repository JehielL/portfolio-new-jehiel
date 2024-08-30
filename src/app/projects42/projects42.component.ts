import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects42',
  standalone: true,
  imports: [],
  templateUrl: './projects42.component.html',
  styleUrl: './projects42.component.css'
})
export class Projects42Component implements OnInit{

  activedLoader = true;
  ngOnInit(): void {

    setTimeout(() => {
      this.activedLoader = false;
    }, 2300); 
    window.scrollTo(0, 0); 
    
  }


}
