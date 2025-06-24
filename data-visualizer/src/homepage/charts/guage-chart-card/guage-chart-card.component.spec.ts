import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuageChartCardComponent } from './guage-chart-card.component';

describe('GuageChartCardComponent', () => {
  let component: GuageChartCardComponent;
  let fixture: ComponentFixture<GuageChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuageChartCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuageChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
