import { TestBed } from '@angular/core/testing';

import { GetVerseService } from './get-verse.service';

describe('GetVerseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetVerseService = TestBed.get(GetVerseService);
    expect(service).toBeTruthy();
  });
});
