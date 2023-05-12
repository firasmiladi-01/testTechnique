import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionComponentComponent } from './main-section-component.component';

describe('MainSectionComponentComponent', () => {
  let component: MainSectionComponentComponent;
  let fixture: ComponentFixture<MainSectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
