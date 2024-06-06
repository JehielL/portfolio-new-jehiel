import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-ia',
  standalone: true,
  imports: [],
  templateUrl: './about-ia.component.html',
  styleUrl: './about-ia.component.css'
})
export class AboutIaComponent implements OnInit {

  activedLoader = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.activedLoader = false;
    }, 2300); 
    window.scrollTo(0, 0); 
  }

}
