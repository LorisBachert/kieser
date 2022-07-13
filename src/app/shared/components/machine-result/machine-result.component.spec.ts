import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineResultComponent } from './machine-result.component';

describe('WorkoutResultComponent', () => {
  let component: MachineResultComponent;
  let fixture: ComponentFixture<MachineResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
