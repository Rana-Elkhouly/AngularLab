import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetofoundComponent } from './pagetofound.component';

describe('PagetofoundComponent', () => {
  let component: PagetofoundComponent;
  let fixture: ComponentFixture<PagetofoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagetofoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetofoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
