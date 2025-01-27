import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEightComponent } from './page-eight.component';

describe('PageEightComponent', () => {
  let component: PageEightComponent;
  let fixture: ComponentFixture<PageEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageEightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
