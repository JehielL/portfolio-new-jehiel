import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTechDetailComponent } from './blog-tech-detail.component';

describe('BlogTechDetailComponent', () => {
  let component: BlogTechDetailComponent;
  let fixture: ComponentFixture<BlogTechDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTechDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogTechDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
