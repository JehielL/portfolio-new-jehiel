import { Component, HostListener, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';
import { CarouselModule } from 'primeng/carousel';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbAccordionModule, CommonModule, ParallaxStandaloneDirective, CarouselModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {
  ngOnInit(): void {
    Aos.init();
  }
  
  backgroundStyles: { [key: string]: string } = {}; // Define the type of backgroundStyles

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    requestAnimationFrame(() => {
      this.backgroundStyles['background-position-y'] = `${window.scrollY * 0.1}px`;
    });
  }
}
