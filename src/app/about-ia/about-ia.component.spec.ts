import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIaComponent } from './about-ia.component';

describe('AboutIaComponent', () => {
  let component: AboutIaComponent;
  let fixture: ComponentFixture<AboutIaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutIaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
