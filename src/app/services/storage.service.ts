import { Injectable } from '@angular/core';
import { ChatbotConfig } from '../models/chatbot-config';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  saveChatbotConfig(config: ChatbotConfig): void {
    localStorage.setItem('chatbotConfig', JSON.stringify(config));
  }

  getChatbotConfig(): ChatbotConfig | null {
    const config = localStorage.getItem('chatbotConfig');
    return config ? JSON.parse(config) : null;
  }

  saveFiles(files: string[]): void {
    localStorage.setItem('uploadedFiles', JSON.stringify(files));
  }

  getFiles(): string[] {
    const files = localStorage.getItem('uploadedFiles');
    return files ? JSON.parse(files) : [];
  }
}