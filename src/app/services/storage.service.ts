import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ChatbotConfig } from '../models/chatbot-config';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private configSubject = new BehaviorSubject<ChatbotConfig | null>(null);

  constructor() {
    const savedConfig = this.getChatbotConfig();
    if (savedConfig) {
      this.configSubject.next(savedConfig);
    }
  }

  saveChatbotConfig(config: ChatbotConfig): void {
    localStorage.setItem('chatbotConfig', JSON.stringify(config));
    this.configSubject.next(config); 
  }

  getChatbotConfig(): ChatbotConfig | null {
    const config = localStorage.getItem('chatbotConfig');
    return config ? JSON.parse(config) : null;
  }

  getConfigObservable(): Observable<ChatbotConfig | null> {
    return this.configSubject.asObservable();
  }

  saveFiles(files: string[]): void {
    localStorage.setItem('uploadedFiles', JSON.stringify(files));
  }

  getFiles(): string[] {
    const files = localStorage.getItem('uploadedFiles');
    return files ? JSON.parse(files) : [];
  }
}