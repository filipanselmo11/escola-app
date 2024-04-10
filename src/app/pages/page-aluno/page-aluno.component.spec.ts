import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAlunoComponent } from './page-aluno.component';

describe('PageAlunoComponent', () => {
  let component: PageAlunoComponent;
  let fixture: ComponentFixture<PageAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
