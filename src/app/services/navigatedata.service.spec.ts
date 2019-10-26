import { TestBed } from '@angular/core/testing';

import { NavigatedataService } from './navigatedata.service';

describe('NavigatedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigatedataService = TestBed.get(NavigatedataService);
    expect(service).toBeTruthy();
  });
});
