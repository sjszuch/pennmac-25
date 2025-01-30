import { TestBed } from '@angular/core/testing';

import { CurrentitemService } from './currentitem.service';

describe('CurrentitemService', () => {
  let service: CurrentitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
