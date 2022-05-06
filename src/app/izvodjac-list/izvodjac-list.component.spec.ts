import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvodjacListComponent } from './izvodjac-list.component';

describe('IzvodjacListComponent', () => {
  let component: IzvodjacListComponent;
  let fixture: ComponentFixture<IzvodjacListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzvodjacListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvodjacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
