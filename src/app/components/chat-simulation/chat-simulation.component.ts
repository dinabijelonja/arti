import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StorageService } from '../../services/storage.service';
import { Message } from '../../models/message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-simulation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './chat-simulation.component.html',
  styleUrls: ['./chat-simulation.component.css']
})
export class ChatSimulationComponent {
  messages: Message[] = [];
  userMessage: string = '';
  botPersonality: number = 0.5;

  constructor(private storageService: StorageService) {
    const config = this.storageService.getChatbotConfig();
    if (config) {
      this.botPersonality = config.personality;
    }
  }

  sendMessage(): void {
    if (this.userMessage.trim()) {
      // Add user message
      const userMessage: Message = {
        text: this.userMessage,
        isBot: false,
        timestamp: new Date()
      };
      this.messages.push(userMessage);

      // Simulate bot response
      setTimeout(() => {
        const response = this.generateBotResponse();
        const botMessage: Message = {
          text: response,
          isBot: true,
          timestamp: new Date()
        };
        this.messages.push(botMessage);
      }, 1000);

      this.userMessage = '';
    }
  }

  private generateBotResponse(): string {
    const responses = [
      'Thanks for your message!',
      'Interesting, tell me more.',
      'Got it, anything else?',
      'Cool, what\'s next?'
    ];
    const tone = this.botPersonality > 0.5 ? 'Friendly' : 'Formal';
    return `${tone}: ${responses[Math.floor(Math.random() * responses.length)]}`;
  }
}