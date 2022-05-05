import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogComponent } from './inprog.component';

describe('InprogComponent', () => {
  let component: InprogComponent;
  let fixture: ComponentFixture<InprogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
