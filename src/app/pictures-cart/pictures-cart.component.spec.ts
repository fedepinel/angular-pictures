import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesCartComponent } from './pictures-cart.component';

describe('PicturesCartComponent', () => {
  let component: PicturesCartComponent;
  let fixture: ComponentFixture<PicturesCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturesCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
