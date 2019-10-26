import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeboardPage } from './noticeboard.page';

describe('NoticeboardPage', () => {
  let component: NoticeboardPage;
  let fixture: ComponentFixture<NoticeboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
