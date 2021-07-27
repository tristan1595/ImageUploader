import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UploadImageService } from './upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})

export class UploadImageComponent implements OnInit {

  selectedFile?: File;
  selectedFileName?: string;
  selectedFileFlag: boolean = false;

  preview?: string;

  loadedImage: boolean = false;

  constructor(private uploadService: UploadImageService,  private router: Router) { }

  ngOnInit(): void {
  }

  selectFiles(event: any): void {
    this.selectedFileName = "";
    this.selectedFile = event.target.files[0];
    this.preview = "";

    if(this.selectedFile) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.preview = e.target.result;
        }

        reader.readAsDataURL(this.selectedFile);
        this.selectedFileName = this.selectedFile.name;
        this.selectedFileFlag = true;
    }
  }

  uploadFile() {
    console.log("hey");
    if(this.selectedFile) {
      this.uploadService.upload(this.selectedFile).subscribe(
        (event: any) => {
          if(event.type === HttpEventType.UploadProgress) {
            this.loadedImage = true;
          }
          else if(event instanceof HttpResponse) {
            this.loadedImage = false;
            this.router.navigate(['/galery'])
          }
        }
      );
    }
  }
}
