import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSecretarioComponent } from './page-secretario.component';

describe('PageSecretarioComponent', () => {
  let component: PageSecretarioComponent;
  let fixture: ComponentFixture<PageSecretarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSecretarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
