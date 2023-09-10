import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDiarioPage } from './form-diario.page';

describe('FormDiarioPage', () => {
  let component: FormDiarioPage;
  let fixture: ComponentFixture<FormDiarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
