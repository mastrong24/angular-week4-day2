import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeomatryListComponent } from './geomatry-list.component';

describe('GeomatryListComponent', () => {
  let component: GeomatryListComponent;
  let fixture: ComponentFixture<GeomatryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeomatryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeomatryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
