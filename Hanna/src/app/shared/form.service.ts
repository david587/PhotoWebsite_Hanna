import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  storeInput(data: any){ 
    let endpoint = "form";
    let url = "http://localhost:8000/api/"+endpoint;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {headers: headers};
    return this.http.post<any>(url,data, httpOption);
  }
}
