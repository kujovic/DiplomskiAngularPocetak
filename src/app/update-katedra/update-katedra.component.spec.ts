import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKatedraComponent } from './update-katedra.component';

describe('UpdateKatedraComponent', () => {
  let component: UpdateKatedraComponent;
  let fixture: ComponentFixture<UpdateKatedraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKatedraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKatedraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
