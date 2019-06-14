import { TestBed, inject } from '@angular/core/testing';

import { SearchrepoService } from './searchrepo.service';

describe('SearchrepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchrepoService]
    });
  });

  it('should be created', inject([SearchrepoService], (service: SearchrepoService) => {
    expect(service).toBeTruthy();
  }));
});
