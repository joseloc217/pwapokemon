import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  getAllLists(): Observable<Detail[]>{
    return this.http.get<Detail[]>('https://pokeapi.co/api/v2/pokemon/');
  }
  getListById(id: number| string):Observable<Detail>{
    return this.http.get<Detail>('https://pokeapi.co/api/v2/pokemon/'+id);
  }
}
