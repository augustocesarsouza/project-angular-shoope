import { TestBed } from '@angular/core/testing';

import { GetImgUserPerfilService } from './get-user-perfil.service';

describe('GetImgUserPerfilService', () => {
  let service: GetImgUserPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetImgUserPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
