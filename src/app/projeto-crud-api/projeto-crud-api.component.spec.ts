import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCrudApiComponent } from './projeto-crud-api.component';

describe('ProjetoCrudApiComponent', () => {
  let component: ProjetoCrudApiComponent;
  let fixture: ComponentFixture<ProjetoCrudApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoCrudApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoCrudApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
