import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByCepComponent } from './find-by-cep.component';

describe('FindByCepComponent', () => {
  let component: FindByCepComponent;
  let fixture: ComponentFixture<FindByCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindByCepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindByCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
