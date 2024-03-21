import { Injectable } from '@angular/core';
import { apiServer } from '../apiService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../model/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

    private apiUrl: String = apiServer.serverUrl

  constructor(private http:HttpClient) { }

  getProduct(): Observable <Productos[]> {
    return this.http.get<Productos[]>(`${this.apiUrl}`)
  }
}
