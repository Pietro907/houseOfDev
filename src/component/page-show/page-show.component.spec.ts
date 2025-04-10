import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShowComponent } from './page-show.component';

describe('PageShowComponent', () => {
  let component: PageShowComponent;
  let fixture: ComponentFixture<PageShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
