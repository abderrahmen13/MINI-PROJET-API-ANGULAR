import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommateurComponent } from './consommateur.component';

describe('ConsommateurComponent', () => {
  let component: ConsommateurComponent;
  let fixture: ComponentFixture<ConsommateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsommateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
