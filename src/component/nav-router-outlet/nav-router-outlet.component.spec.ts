import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRouterOutletComponent } from './nav-router-outlet.component';

describe('NavRouterOutletComponent', () => {
  let component: NavRouterOutletComponent;
  let fixture: ComponentFixture<NavRouterOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavRouterOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
