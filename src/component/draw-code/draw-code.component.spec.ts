import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawCodeComponent } from './draw-code.component';

describe('DrawCodeComponent', () => {
  let component: DrawCodeComponent;
  let fixture: ComponentFixture<DrawCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
