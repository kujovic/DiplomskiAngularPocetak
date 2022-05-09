import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNastavnikComponent } from './update-nastavnik.component';

describe('UpdateNastavnikComponent', () => {
  let component: UpdateNastavnikComponent;
  let fixture: ComponentFixture<UpdateNastavnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNastavnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
