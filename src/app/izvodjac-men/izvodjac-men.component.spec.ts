import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvodjacMenComponent } from './izvodjac-men.component';

describe('IzvodjacMenComponent', () => {
  let component: IzvodjacMenComponent;
  let fixture: ComponentFixture<IzvodjacMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzvodjacMenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvodjacMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
