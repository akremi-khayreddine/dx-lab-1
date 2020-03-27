import { TestBed } from '@angular/core/testing';

import { DxLabLibService } from './dx-lab-lib.service';

describe('DxLabLibService', () => {
  let service: DxLabLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DxLabLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
