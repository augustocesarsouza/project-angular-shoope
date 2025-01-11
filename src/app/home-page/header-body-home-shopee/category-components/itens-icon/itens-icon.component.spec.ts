import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensIconComponent } from './itens-icon.component';

describe('ItensIconComponent', () => {
  let component: ItensIconComponent;
  let fixture: ComponentFixture<ItensIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItensIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItensIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
