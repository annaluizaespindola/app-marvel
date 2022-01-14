import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  uri = environment.URI_API;

  constructor(private http: HttpClient) { }

  getCharacters(limit: number = 10, skip: number = 0) {
    return this.http.get(`${this.uri}/characters?limit=${limit}&offset=${skip}`);
  }

  getCharacter(characterId: number) {
    return this.http.get(`${this.uri}/characters/${characterId}`);
  }

}
