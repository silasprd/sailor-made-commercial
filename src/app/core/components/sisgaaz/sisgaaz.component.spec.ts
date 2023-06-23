/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SisgaazComponent } from './sisgaaz.component';

describe('SisgaazComponent', () => {
  let component: SisgaazComponent;
  let fixture: ComponentFixture<SisgaazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisgaazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisgaazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
