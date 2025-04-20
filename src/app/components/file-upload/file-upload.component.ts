import { Component, OnInit } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    ListboxModule,
    ButtonModule
  ],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  uploadedFiles: string[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.uploadedFiles = this.storageService.getFiles();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const newFiles = Array.from(input.files)
        .filter(file => file.name.endsWith('.txt'))
        .map(file => file.name);
      this.uploadedFiles = [...this.uploadedFiles, ...newFiles];
      this.storageService.saveFiles(this.uploadedFiles);
      input.value = ''; // Reset input
    }
  }

  deleteFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
    this.storageService.saveFiles(this.uploadedFiles);
  }
}