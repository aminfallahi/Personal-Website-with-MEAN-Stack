import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PwService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  getMsgs() {
    return this.http.get(`${this.uri}/msgs`);
  }
  addMsg(subject, email, body) {
    const msg = {
      subject: subject,
      email: email,
      body: body
    };
    return this.http.post(`${this.uri}/contact`, msg);
  }
}
