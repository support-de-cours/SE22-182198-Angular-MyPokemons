import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    private _service: PokeapiService
  ) { }

  ngOnInit(): void 
  {
    this._service.all.subscribe( data => {
      this.pokemons = data.results;
     } );
  }

}
