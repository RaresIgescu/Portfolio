import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STSComponent } from './sts.component';

describe('STSComponent', () => {
  let component: STSComponent;
  let fixture: ComponentFixture<STSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [STSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
