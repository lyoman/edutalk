import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnoticePage } from './addnotice.page';

describe('AddnoticePage', () => {
  let component: AddnoticePage;
  let fixture: ComponentFixture<AddnoticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnoticePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
