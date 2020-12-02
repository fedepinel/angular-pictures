import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesAboutComponent } from './pictures-about.component';

describe('PicturesAboutComponent', () => {
  let component: PicturesAboutComponent;
  let fixture: ComponentFixture<PicturesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturesAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
