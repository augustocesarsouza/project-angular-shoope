import { TestBed } from '@angular/core/testing';
import { GetUserPerfilService } from './get-user-perfil.service';

describe('GetImgUserPerfilService', () => {
  let service: GetUserPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
