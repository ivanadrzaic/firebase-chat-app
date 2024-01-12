import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthenticatedChatComponent } from './unauthenticated-chat.component';

describe('UnauthenticatedChatComponent', () => {
  let component: UnauthenticatedChatComponent;
  let fixture: ComponentFixture<UnauthenticatedChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnauthenticatedChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnauthenticatedChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
