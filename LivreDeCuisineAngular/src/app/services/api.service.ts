import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://192.168.56.1:8080';

  constructor(private http: HttpClient) {}

  getRecettes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recettes`);
  }
}
