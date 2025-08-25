import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondHeroComponent } from './second-hero.component';

describe('SecondHeroComponent', () => {
  let component: SecondHeroComponent;
  let fixture: ComponentFixture<SecondHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
