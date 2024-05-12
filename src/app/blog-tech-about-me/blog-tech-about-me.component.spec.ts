import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTechAboutMeComponent } from './blog-tech-about-me.component';

describe('BlogTechAboutMeComponent', () => {
  let component: BlogTechAboutMeComponent;
  let fixture: ComponentFixture<BlogTechAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTechAboutMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogTechAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
