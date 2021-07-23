import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  backEndUrl: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { 
  }
}
