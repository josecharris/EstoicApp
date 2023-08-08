import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MandamientosPage } from './mandamientos.page';

describe('MandamientosPage', () => {
  let component: MandamientosPage;
  let fixture: ComponentFixture<MandamientosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MandamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
