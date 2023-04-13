import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasionTipsComponent } from './fasion-tips.component';

describe('FasionTipsComponent', () => {
  let component: FasionTipsComponent;
  let fixture: ComponentFixture<FasionTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasionTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasionTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
