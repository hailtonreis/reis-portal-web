import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReisAi } from './reis-ai';

describe('ReisAi', () => {
  let component: ReisAi;
  let fixture: ComponentFixture<ReisAi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReisAi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReisAi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
