import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGamificationComponent } from './about-gamification.component';

describe('AboutGamificationComponent', () => {
  let component: AboutGamificationComponent;
  let fixture: ComponentFixture<AboutGamificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutGamificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutGamificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
