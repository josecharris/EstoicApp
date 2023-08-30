import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudiolibroPage } from './audiolibro.page';

describe('AudiolibroPage', () => {
  let component: AudiolibroPage;
  let fixture: ComponentFixture<AudiolibroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AudiolibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
