import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReflexionPage } from './reflexion.page';

describe('ReflexionPage', () => {
  let component: ReflexionPage;
  let fixture: ComponentFixture<ReflexionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReflexionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
