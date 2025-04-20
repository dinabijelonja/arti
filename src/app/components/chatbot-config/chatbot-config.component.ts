import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { StorageService } from '../../services/storage.service';
import { ChatbotConfig } from '../../models/chatbot-config';

@Component({
  selector: 'app-chatbot-config',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    SliderModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './chatbot-config.component.html',
  styleUrls: ['./chatbot-config.component.css']
})
export class ChatbotConfigComponent implements OnInit {
  configForm: FormGroup;

  constructor(private fb: FormBuilder, private storageService: StorageService) {
    this.configForm = this.fb.group({
      name: ['', Validators.required],
      personality: [0.5, [Validators.min(0), Validators.max(1)]],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const savedConfig = this.storageService.getChatbotConfig();
    if (savedConfig) {
      this.configForm.patchValue(savedConfig);
    }
  }

  onSubmit(): void {
    if (this.configForm.valid) {
      const config: ChatbotConfig = this.configForm.value;
      this.storageService.saveChatbotConfig(config);
      alert('Chatbot configuration saved!');
    }
  }
}