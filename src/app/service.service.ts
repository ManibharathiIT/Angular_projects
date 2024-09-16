import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private data='assets/student.json' 
  constructor(private http:HttpClient) {}
    getData(){
      return this.http.get(this.data);

   }
}
