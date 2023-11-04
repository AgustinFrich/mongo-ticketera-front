import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRespuestaComponent } from './mostrar-respuesta.component';

describe('MostrarRespuestaComponent', () => {
  let component: MostrarRespuestaComponent;
  let fixture: ComponentFixture<MostrarRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarRespuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
