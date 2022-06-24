import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatedraInfoComponent } from './katedra-info.component';

describe('KatedraInfoComponent', () => {
  let component: KatedraInfoComponent;
  let fixture: ComponentFixture<KatedraInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatedraInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatedraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
