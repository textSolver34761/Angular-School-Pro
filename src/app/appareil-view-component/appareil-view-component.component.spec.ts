import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilViewComponentComponent } from './appareil-view-component.component';

describe('AppareilViewComponentComponent', () => {
  let component: AppareilViewComponentComponent;
  let fixture: ComponentFixture<AppareilViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareilViewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareilViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
