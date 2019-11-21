import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenContactInfoComponent } from './open-contact-info.component';

describe('OpenContactInfoComponent', () => {
  let component: OpenContactInfoComponent;
  let fixture: ComponentFixture<OpenContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
