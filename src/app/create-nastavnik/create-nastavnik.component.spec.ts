import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNastavnikComponent } from './create-nastavnik.component';

describe('CreateNastavnikComponent', () => {
  let component: CreateNastavnikComponent;
  let fixture: ComponentFixture<CreateNastavnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNastavnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
