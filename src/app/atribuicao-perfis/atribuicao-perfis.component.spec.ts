import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicaoPerfisComponent } from './atribuicao-perfis.component';

describe('AtribuicaoPerfisComponent', () => {
  let component: AtribuicaoPerfisComponent;
  let fixture: ComponentFixture<AtribuicaoPerfisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtribuicaoPerfisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtribuicaoPerfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
