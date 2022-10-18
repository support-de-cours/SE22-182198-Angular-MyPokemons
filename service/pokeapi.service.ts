import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const endpoint: string = "https://pokeapi.co/api/v2/";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  // Create the Observable _pokemons
  private _pokemons = new BehaviorSubject<any>({});

  constructor(
    private _httpClient: HttpClient
  ) {}

  // Get pokemons from the API
  getHttpList()
  {
    let url = `${endpoint}pokemon?limit=100000&offset=0`;

    this._httpClient.get( url ).subscribe( data => this._pokemons.next( data ) );
  }

  // Get pokemons from the Observable
  get all()
  {
    return this._pokemons;
  }

  // ----
  // Creation des methodes de recup des données d'un pokemon
  // ----
}
