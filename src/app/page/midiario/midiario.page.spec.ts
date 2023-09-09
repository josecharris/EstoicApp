import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MidiarioPage } from './midiario.page';

describe('MidiarioPage', () => {
  let component: MidiarioPage;
  let fixture: ComponentFixture<MidiarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MidiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
