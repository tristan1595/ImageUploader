import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AppConfigService } from '../app-config.service';
import { Image } from '../model/image';
import { ImageService } from '../service/image.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
    
  // API url
  baseApiUrl = "https://file.io"
    
  constructor(private http:HttpClient, private appConfig: AppConfigService) { }
  
  // Returns an observable
  upload(file: File):Observable<any> {
  
      // Create form data
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("file", file, file.name);

      const image = new Image();
      //image.file = formData;

      console.log(image);
        
      // Make http post request over api
      // with formData as req
      return this.http.post(this.appConfig.backEndUrl + "image" , formData)
  }
}