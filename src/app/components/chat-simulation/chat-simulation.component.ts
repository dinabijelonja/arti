import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { StorageService } from '../../services/storage.service';
import { Message } from '../../models/message';

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
export class ChatSimulationComponent implements OnInit, OnDestroy {
  messages: Message[] = [];
  userMessage: string = '';
  botPersonality: number = 0.5;
  private configSubscription: Subscription;

  constructor(private storageService: StorageService) {
    this.configSubscription = this.storageService.getConfigObservable().subscribe(config => {
      if (config) {
        this.botPersonality = config.personality;
      }
    });
  }

  ngOnInit(): void {
    const config = this.storageService.getChatbotConfig();
    if (config) {
      this.botPersonality = config.personality;
    }
  }

  sendMessage(): void {
    if (this.userMessage.trim()) {
      const userMessage: Message = {
        text: this.userMessage,
        isBot: false,
        timestamp: new Date()
      };
      this.messages.push(userMessage);

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

  ngOnDestroy(): void {
    this.configSubscription.unsubscribe(); 
  }
}