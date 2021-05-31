import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilComponentComponent } from './appareil-component.component';

describe('AppareilComponentComponent', () => {
  let component: AppareilComponentComponent;
  let fixture: ComponentFixture<AppareilComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareilComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareilComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
