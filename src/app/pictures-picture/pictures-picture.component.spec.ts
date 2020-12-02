import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesPictureComponent } from './pictures-picture.component';

describe('PicturesPictureComponent', () => {
  let component: PicturesPictureComponent;
  let fixture: ComponentFixture<PicturesPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturesPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
