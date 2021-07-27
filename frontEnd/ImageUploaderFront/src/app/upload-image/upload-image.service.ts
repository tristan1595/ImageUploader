import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private appConfig: AppConfigService, private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.appConfig.backEndUrl + '/upload', formData, {
      reportProgress: true,
      responseType: 'json'
    })
  
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.appConfig.backEndUrl + '/files');
  }
}
