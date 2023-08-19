import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '../../entities/file-upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-upload-component',
  templateUrl: './file-upload-component.component.html',
  styleUrls: ['./file-upload-component.component.scss']
})
export class FileUploadComponentComponent {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService) {

  }

  selectFile(event: any): void {
    this.selectFile = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            this.progress = 0;

            if(err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = "Could not upload the file!";
            }

            this.currentFile = undefined;
          }
        })

      }
    }
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }
}
