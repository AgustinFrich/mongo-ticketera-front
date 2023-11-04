import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoConsultasComponent } from './listado-consultas.component';

describe('ListadoConsultasComponent', () => {
  let component: ListadoConsultasComponent;
  let fixture: ComponentFixture<ListadoConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
