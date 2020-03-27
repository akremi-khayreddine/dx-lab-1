import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxLabLibComponent } from './dx-lab-lib.component';

describe('DxLabLibComponent', () => {
  let component: DxLabLibComponent;
  let fixture: ComponentFixture<DxLabLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxLabLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxLabLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
