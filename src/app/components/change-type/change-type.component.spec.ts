import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTypeComponent } from './change-type.component';

describe('ChangeTypeComponent', () => {
  let component: ChangeTypeComponent;
  let fixture: ComponentFixture<ChangeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
