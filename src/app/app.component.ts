import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChatbotConfigComponent } from './components/chatbot-config/chatbot-config.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ChatSimulationComponent } from './components/chat-simulation/chat-simulation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ChatbotConfigComponent,
    FileUploadComponent,
    ChatSimulationComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}