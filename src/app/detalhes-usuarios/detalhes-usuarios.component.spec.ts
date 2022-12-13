import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesUsuariosComponent } from './detalhes-usuarios.component';

describe('DetalhesUsuariosComponent', () => {
  let component: DetalhesUsuariosComponent;
  let fixture: ComponentFixture<DetalhesUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
