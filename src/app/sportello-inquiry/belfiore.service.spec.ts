import { TestBed } from '@angular/core/testing';

import { BelfioreService } from './belfiore.service';

describe('BelfioreService', () => {
  let service: BelfioreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BelfioreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
