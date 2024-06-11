import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineChefComponent } from './timeline-chef.component';

describe('TimelineChefComponent', () => {
  let component: TimelineChefComponent;
  let fixture: ComponentFixture<TimelineChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineChefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
