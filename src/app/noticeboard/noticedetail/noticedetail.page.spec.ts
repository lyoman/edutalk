import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticedetailPage } from './noticedetail.page';

describe('NoticedetailPage', () => {
  let component: NoticedetailPage;
  let fixture: ComponentFixture<NoticedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticedetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
