import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '../../entities/file-upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { GameList } from 'src/app/shared/entities/gameList';

@Component({
  selector: 'app-file-upload-component',
  templateUrl: './file-upload-component.component.html',
  styleUrls: ['./file-upload-component.component.scss']
})
export class FileUploadComponentComponent {

  @Input() gameImage : string | undefined; 

  selectedFiles?: File;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService) {

  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files[0];
    console.log(this.selectedFiles);
  }

  upload(event: Event): void {
    event.preventDefault();
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles;

      if (file) {
        this.currentFile = file; 
        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFile(this.selectFile.name); 
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
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
}
