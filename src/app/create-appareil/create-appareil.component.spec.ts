import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppareilComponent } from './create-appareil.component';

describe('CreateAppareilComponent', () => {
  let component: CreateAppareilComponent;
  let fixture: ComponentFixture<CreateAppareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAppareilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
