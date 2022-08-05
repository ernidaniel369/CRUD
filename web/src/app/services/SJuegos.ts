import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juegos } from '../models/MJuegos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  API_URI = 'https://crudserver369.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getJuegos() {
    return this.http.get(`${this.API_URI}/juegos`);
  }

  getJuego(id: string) {
    return this.http.get(`${this.API_URI}/juegos/${id}`);
  }

  deleteJuegos(id: string) {
    return this.http.delete(`${this.API_URI}/juegos/${id}`);
  }

  saveJuegos(juegos: Juegos) {
    return this.http.post(`${this.API_URI}/juegos`, juegos);
  }

  updateJuego(id: undefined | number, updateJuego: Juegos) {
    return this.http.put(`${this.API_URI}/juegos/${id}`, updateJuego);
  }

  
}
