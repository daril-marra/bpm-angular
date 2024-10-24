import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentiTableComponent } from './movimenti-table.component';

describe('MovimentiTableComponent', () => {
  let component: MovimentiTableComponent;
  let fixture: ComponentFixture<MovimentiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovimentiTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovimentiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
