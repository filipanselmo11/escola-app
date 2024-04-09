import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSecretarioComponent } from './login-secretario.component';

describe('LoginSecretarioComponent', () => {
  let component: LoginSecretarioComponent;
  let fixture: ComponentFixture<LoginSecretarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSecretarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
