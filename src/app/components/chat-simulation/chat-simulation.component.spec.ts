import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSimulationComponent } from './chat-simulation.component';

describe('ChatSimulationComponent', () => {
  let component: ChatSimulationComponent;
  let fixture: ComponentFixture<ChatSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSimulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
