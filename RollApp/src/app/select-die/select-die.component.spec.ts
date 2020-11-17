import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDieComponent } from './select-die.component';

describe('SelectDieComponent', () => {
  let component: SelectDieComponent;
  let fixture: ComponentFixture<SelectDieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
