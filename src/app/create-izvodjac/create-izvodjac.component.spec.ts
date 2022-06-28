import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIzvodjacComponent } from './create-izvodjac.component';

describe('CreateIzvodjacComponent', () => {
  let component: CreateIzvodjacComponent;
  let fixture: ComponentFixture<CreateIzvodjacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIzvodjacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIzvodjacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
