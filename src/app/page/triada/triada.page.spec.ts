import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TriadaPage } from './triada.page';

describe('TriadaPage', () => {
  let component: TriadaPage;
  let fixture: ComponentFixture<TriadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TriadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
