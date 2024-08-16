import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPollolocoComponent } from './project-polloloco.component';

describe('ProjectPollolocoComponent', () => {
  let component: ProjectPollolocoComponent;
  let fixture: ComponentFixture<ProjectPollolocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPollolocoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectPollolocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
