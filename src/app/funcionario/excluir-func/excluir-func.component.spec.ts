import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirFuncComponent } from './excluir-func.component';

describe('ExcluirFuncComponent', () => {
  let component: ExcluirFuncComponent;
  let fixture: ComponentFixture<ExcluirFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
