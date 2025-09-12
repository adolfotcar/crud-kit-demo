import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aio } from './aio';

describe('Aio', () => {
  let component: Aio;
  let fixture: ComponentFixture<Aio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
