import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerokuMenuComponent } from './heroku-menu.component';

describe('HerokuMenuComponent', () => {
  let component: HerokuMenuComponent;
  let fixture: ComponentFixture<HerokuMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HerokuMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HerokuMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
