import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCasamento } from './casamento';

describe('DemoCasamento', () => {
  let component: DemoCasamento;
  let fixture: ComponentFixture<DemoCasamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoCasamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoCasamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
