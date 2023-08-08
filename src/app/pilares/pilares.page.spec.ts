import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilaresPage } from './pilares.page';

describe('PilaresPage', () => {
  let component: PilaresPage;
  let fixture: ComponentFixture<PilaresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PilaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
