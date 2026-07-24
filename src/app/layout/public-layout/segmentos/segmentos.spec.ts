import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segmentos } from './segmentos';

describe('Segmentos', () => {
  let component: Segmentos;
  let fixture: ComponentFixture<Segmentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Segmentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Segmentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
