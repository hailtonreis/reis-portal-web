import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cerimonia } from './cerimonia';

describe('Cerimonia', () => {
  let component: Cerimonia;
  let fixture: ComponentFixture<Cerimonia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cerimonia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cerimonia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
