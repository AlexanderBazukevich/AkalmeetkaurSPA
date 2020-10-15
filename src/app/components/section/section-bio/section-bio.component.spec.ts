import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBioComponent } from './section-bio.component';

describe('SectionBioComponent', () => {
  let component: SectionBioComponent;
  let fixture: ComponentFixture<SectionBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
