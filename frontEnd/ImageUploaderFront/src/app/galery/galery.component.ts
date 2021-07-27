import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadImageService } from '../upload-image/upload-image.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  imageInfos?: Observable<any>;

  constructor(private uploadService: UploadImageService) { }

  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();  
  }
}
