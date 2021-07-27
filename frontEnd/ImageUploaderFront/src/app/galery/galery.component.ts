import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadImageService } from '../upload-image/upload-image.service';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})

export class GaleryComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  deleteIconFlag: boolean[] = [];

  imageInfos?: Observable<any>;

  constructor(private uploadService: UploadImageService, private router: Router) { }

  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();  
    this.imageInfos.forEach(element => {
      for(let i = 0; i < element.length; i++) {
        this.deleteIconFlag.push(false);
      }
    });
  }

  displayDeleteIcon(i: number) {
    this.deleteIconFlag[i] = true;
  }

  undisplayDeleteIcon(i: number) {
    this.deleteIconFlag[i] = false;
  }

  deleteImage(id: string) {
    this.uploadService.deleteFiles(id).subscribe(resp => {
      this.imageInfos = this.uploadService.getFiles();
      this.imageInfos.forEach(element => {
        for(let i = 0; i < element.length; i++) {
          this.deleteIconFlag.push(false);
        }
      });
    })
  }
}
