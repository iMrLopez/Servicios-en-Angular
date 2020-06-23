import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePerrosComponent } from './lista-de-perros.component';

describe('ListaDePerrosComponent', () => {
  let component: ListaDePerrosComponent;
  let fixture: ComponentFixture<ListaDePerrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDePerrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDePerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
