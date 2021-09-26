import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolPageListComponent } from './rol-page-list.component';

describe('RolPageListComponent', () => {
  let component: RolPageListComponent;
  let fixture: ComponentFixture<RolPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolPageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
