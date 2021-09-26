import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolPageEditComponent } from './rol-page-edit.component';

describe('RolPageEditComponent', () => {
  let component: RolPageEditComponent;
  let fixture: ComponentFixture<RolPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolPageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
