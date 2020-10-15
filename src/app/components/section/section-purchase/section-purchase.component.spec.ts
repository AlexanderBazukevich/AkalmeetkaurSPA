import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPurchaseComponent } from './section-purchase.component';

describe('SectionPurchaseComponent', () => {
  let component: SectionPurchaseComponent;
  let fixture: ComponentFixture<SectionPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
