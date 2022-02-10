import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodiscountComponent } from './nodiscount.component';

describe('NodiscountComponent', () => {
  let component: NodiscountComponent;
  let fixture: ComponentFixture<NodiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
