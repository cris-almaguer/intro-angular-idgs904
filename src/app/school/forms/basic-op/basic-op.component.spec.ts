import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOpComponent } from './basic-op.component';

describe('BasicOpComponent', () => {
  let component: BasicOpComponent;
  let fixture: ComponentFixture<BasicOpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicOpComponent]
    });
    fixture = TestBed.createComponent(BasicOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
