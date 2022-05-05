import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKatedraComponent } from './create-katedra.component';

describe('CreateKatedraComponent', () => {
  let component: CreateKatedraComponent;
  let fixture: ComponentFixture<CreateKatedraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateKatedraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKatedraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
