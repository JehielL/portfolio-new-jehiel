import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects42Component } from './projects42.component';

describe('Projects42Component', () => {
  let component: Projects42Component;
  let fixture: ComponentFixture<Projects42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects42Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Projects42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
