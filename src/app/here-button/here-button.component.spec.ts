import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereButtonComponent } from './here-button.component';

describe('HereButtonComponent', () => {
  let component: HereButtonComponent;
  let fixture: ComponentFixture<HereButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HereButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HereButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
