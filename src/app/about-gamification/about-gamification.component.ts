import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-gamification',
  standalone: true,
  imports: [],
  templateUrl: './about-gamification.component.html',
  styleUrl: './about-gamification.component.css'
})
export class AboutGamificationComponent implements OnInit{
  
    activedLoader = true;
    ngOnInit(): void {
  
      setTimeout(() => {
        this.activedLoader = false;
      }, 2300); 
      window.scrollTo(0, 0); 
      
    }

}
