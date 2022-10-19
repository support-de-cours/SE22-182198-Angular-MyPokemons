import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pokemon: any = {};
  picture: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _service: PokeapiService
  ) { }

  ngOnInit(): void 
  {
    let _id = this._route.snapshot.paramMap.get('id') ?? '0';
    let pokemonId: number = parseInt(_id);



    // ---- 
    // Appel de la methode premettant de recup les données du pokemon
    // Envois des données à la vue
    // ----

    // Get the pokemon data
    this._service.getHttpDetail( pokemonId );

    this._service.getPokemon().subscribe(data => {
      this.pokemon = data;
      this.picture = data.sprites?.other['official-artwork'].front_default;
    })
  }

}
