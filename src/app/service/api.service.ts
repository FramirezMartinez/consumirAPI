import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private urlApi= 'https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9,10,11,12,13,14,16';
 // private urlApi= 'https://rickandmortyapi.com/api/character?page=${page}';
  

  constructor(private http: HttpClient) { }
  
  public getData(): Observable<any>
  {
    return this.http.get<any>(this.urlApi);
  }
  public getData1(page: number = 1): Observable<any> {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    return this.http.get<any>(url);
}
}
