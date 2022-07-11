import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoginRegComponent } from './page-login-reg.component';

describe('PageLoginRegComponent', () => {
  let component: PageLoginRegComponent;
  let fixture: ComponentFixture<PageLoginRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLoginRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoginRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
