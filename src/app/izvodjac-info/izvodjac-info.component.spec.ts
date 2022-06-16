import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvodjacInfoComponent } from './izvodjac-info.component';

describe('IzvodjacInfoComponent', () => {
  let component: IzvodjacInfoComponent;
  let fixture: ComponentFixture<IzvodjacInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzvodjacInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvodjacInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
