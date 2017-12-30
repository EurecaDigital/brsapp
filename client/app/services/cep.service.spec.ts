import { TestBed, inject } from '@angular/core/testing';



describe('CepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CepService]
    });
  });

  it('should be created', inject([CepService], (service: CepService) => {
    expect(service).toBeTruthy();
  }));
});
