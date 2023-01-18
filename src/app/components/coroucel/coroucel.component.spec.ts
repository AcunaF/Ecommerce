import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoroucelComponent } from './coroucel.component';

describe('CoroucelComponent', () => {
  let component: CoroucelComponent;
  let fixture: ComponentFixture<CoroucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoroucelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoroucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
