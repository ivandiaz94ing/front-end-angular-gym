import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecionesComponent } from './seciones.component';

describe('SecionesComponent', () => {
  let component: SecionesComponent;
  let fixture: ComponentFixture<SecionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
